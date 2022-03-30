import { ObjectivesRepository } from "../../repositories/implementations/ObjectivesRepository";
import { ListObjectiveController } from "./ListObjectiveController";
import { ListObjectiveUseCase } from "./ListObjectiveUseCase";

const objectiveRepository = ObjectivesRepository.getInstance();
const listObjectiveUseCase = new ListObjectiveUseCase(objectiveRepository);
const listObjectiveController = new ListObjectiveController(
  listObjectiveUseCase
);
export { listObjectiveController };
