import { Objective } from "../entities/Objective";

interface ICreateObjectiveDTO {
  name: string;
}

interface IObjectivesRepository {
  findByName(name: string): Promise<Objective>;
  list(): Promise<Objective[]>;
  create({ name }: ICreateObjectiveDTO): Promise<void>;
}
export { IObjectivesRepository, ICreateObjectiveDTO };
