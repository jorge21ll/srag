import { Objective } from "../../model/Objective";
import { IObjectivesRepository } from "../../repositories/IObjectivesRepository";

class ListObjectiveUseCase {
  constructor(private objectivesRepository: IObjectivesRepository) {}
  execute(): Objective[] {
    const all = this.objectivesRepository.list();
    return all;
  }
}
export { ListObjectiveUseCase };
