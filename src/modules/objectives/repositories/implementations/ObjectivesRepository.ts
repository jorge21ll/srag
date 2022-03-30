import { Objective } from "../../model/Objective";
import {
  ICreateObjectiveDTO,
  IObjectivesRepository,
} from "../IObjectivesRepository";

class ObjectivesRepository implements IObjectivesRepository {
  private objectives: Objective[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: ObjectivesRepository;

  private constructor() {
    this.objectives = [];
  }

  public static getInstance(): ObjectivesRepository {
    if (!ObjectivesRepository.INSTANCE) {
      ObjectivesRepository.INSTANCE = new ObjectivesRepository();
    }
    return ObjectivesRepository.INSTANCE;
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
export { ObjectivesRepository };
