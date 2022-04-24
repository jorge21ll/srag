import { inject, injectable } from "tsyringe";

import { IObjectivesRepository } from "../../repositories/IObjectivesRepository";

interface IRequest {
  name: string;
}

@injectable()
class CreateObjectiveUseCase {
  constructor(
    @inject("ObjectivesRepository")
    private objectivesRepository: IObjectivesRepository
  ) {}

  async execute({ name }: IRequest): Promise<void> {
    const objectiveAlreadyExists = await this.objectivesRepository.findByName(
      name
    );
    if (objectiveAlreadyExists) {
      throw new Error("Objective already exists!");
    }
    this.objectivesRepository.create({
      name,
    });
  }
}
export { CreateObjectiveUseCase };
