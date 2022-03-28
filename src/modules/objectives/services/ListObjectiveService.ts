import { IObjectivesRepository } from "../repositories/IObjectivesRepository";

class ListObjectiveService {
  constructor(private objectivesRepository: IObjectivesRepository) {}
  execute() {
    return this.objectivesRepository.list();
  }
}
export { ListObjectiveService };
