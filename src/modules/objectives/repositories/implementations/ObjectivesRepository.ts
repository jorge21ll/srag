import { getRepository, Repository } from "typeorm";

import { Objective } from "../../entities/Objective";
import {
  ICreateObjectiveDTO,
  IObjectivesRepository,
} from "../IObjectivesRepository";

class ObjectivesRepository implements IObjectivesRepository {
  private repository: Repository<Objective>;

  constructor() {
    this.repository = getRepository(Objective);
  }

  async create({ name }: ICreateObjectiveDTO): Promise<void> {
    const objective = this.repository.create({
      name,
    });
    await this.repository.save(objective);
  }

  async list(): Promise<Objective[]> {
    const objectives = await this.repository.find();
    return objectives;
  }

  async findByName(name: string): Promise<Objective> {
    const objective = await this.repository.findOne({ name });
    return objective;
  }
}
export { ObjectivesRepository };
