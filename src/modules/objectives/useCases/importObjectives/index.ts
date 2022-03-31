import { ObjectivesRepository } from "../../repositories/implementations/ObjectivesRepository";
import { ImportObjectiveController } from "./ImportObjectiveController";
import { ImportObjectiveUseCase } from "./ImportObjectiveUseCase";

const objectiveRepository = ObjectivesRepository.getInstance();
const importObjectiveUseCase = new ImportObjectiveUseCase(objectiveRepository);
const importObjectiveController = new ImportObjectiveController(
  importObjectiveUseCase
);
export { importObjectiveController };
