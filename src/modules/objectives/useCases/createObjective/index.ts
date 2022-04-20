import { ObjectivesRepository } from "../../repositories/implementations/ObjectivesRepository";
import { CreateObjectiveController } from "./CreateObjectiveController";
import { CreateObjectiveUseCase } from "./CreateObjectiveUseCase";

export default (): CreateObjectiveController => {
  const objectivesRepository = new ObjectivesRepository();
  const createObjectiveUseCase = new CreateObjectiveUseCase(
    objectivesRepository
  );
  const createObjectiveController = new CreateObjectiveController(
    createObjectiveUseCase
  );
  return createObjectiveController;
};
