import { Objective } from "../../model/Objective";
import {
  ICreateObjectiveDTO,
  IObjectivesRepository,
} from "../IObjectivesRepository";

class ObjectivesRepositoy implements IObjectivesRepository {
  private objectives: Objective[];
  constructor() {
    this.objectives = [];
  }
  findByName(name: string): Objective {
    const equipment = this.objectives.find(
      (objective) => objective.name === name
    );
    return equipment;
  }
  findByID(id: string): Objective {
    console.log(id);
    throw new Error("Method not implemented.");
  }
  list(): Objective[] {
    return this.objectives;
  }
  create({ name }: ICreateObjectiveDTO): void {
    const objective = new Objective();
    Object.assign(objective, {
      name,
      created_at: new Date(),
    });
    this.objectives.push(objective);
  }
}
export { ObjectivesRepositoy };
