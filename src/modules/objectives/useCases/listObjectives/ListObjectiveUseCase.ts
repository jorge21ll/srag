import { inject, injectable } from "tsyringe";

import { Objective } from "../../entities/Objective";
import { IObjectivesRepository } from "../../repositories/IObjectivesRepository";

@injectable()
class ListObjectiveUseCase {
  constructor(
    @inject("ObjectivesRepository")
    private objectivesRepository: IObjectivesRepository
  ) {}
  async execute(): Promise<Objective[]> {
    const objectives = await this.objectivesRepository.list();
    return objectives;
  }
}
export { ListObjectiveUseCase };
