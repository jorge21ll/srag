import { Objective } from "../model/Objective";

interface ICreateObjectiveDTO {
  name: string;
}

interface IObjectivesRepository {
  findByName(name: string): Objective;
  findByID(id: string): Objective;
  list(): Objective[];
  create({ name }: ICreateObjectiveDTO): void;
}
export { IObjectivesRepository, ICreateObjectiveDTO };
