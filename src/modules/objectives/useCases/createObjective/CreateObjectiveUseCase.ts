import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppErros";
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
      throw new AppError("Objective already exists!");
    }
    this.objectivesRepository.create({
      name,
    });
  }
}
export { CreateObjectiveUseCase };
