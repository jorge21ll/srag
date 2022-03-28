import { IObjectivesRepository } from "../../repositories/IObjectivesRepository";

interface IRequest {
  name: string;
}

class CreateObjectiveUseCase {
  constructor(private objectivesRepository: IObjectivesRepository) {}
  execute({ name }: IRequest) {
    const objectiveAlreadyExists = this.objectivesRepository.findByName(name);
    if (objectiveAlreadyExists) {
      throw new Error("Objective already exists!");
    }
    this.objectivesRepository.create({
      name,
    });
  }
}
export { CreateObjectiveUseCase };
