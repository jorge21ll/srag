import { ObjectivesRepository } from "../../repositories/implementations/ObjectivesRepository";
import { CreateObjectiveController } from "./CreateObjectiveController";
import { CreateObjectiveUseCase } from "./CreateObjectiveUseCase";

const objectivesRepository = ObjectivesRepository.getInstance();
const createObjectiveUseCase = new CreateObjectiveUseCase(objectivesRepository);
const createObjectiveController = new CreateObjectiveController(
  createObjectiveUseCase
);
export { createObjectiveController };
