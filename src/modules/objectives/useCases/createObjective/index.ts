import { ObjectivesRepositoy } from "../../repositories/implementations/ObjectivesRepository";
import { CreateObjectiveController } from "./CreateObjectiveController";
import { CreateObjectiveUseCase } from "./CreateObjectiveUseCase";

const objectivesRepository = new ObjectivesRepositoy();
const createObjectiveUseCase = new CreateObjectiveUseCase(objectivesRepository);
const createObjectiveController = new CreateObjectiveController(
  createObjectiveUseCase
);
export { createObjectiveController };
