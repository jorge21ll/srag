import { ImportObjectiveController } from "./ImportObjectiveController";
import { ImportObjectiveUseCase } from "./ImportObjectiveUseCase";

const importObjectiveUseCase = new ImportObjectiveUseCase();
const importObjectiveController = new ImportObjectiveController(
  importObjectiveUseCase
);
export { importObjectiveController };
