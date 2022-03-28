import { EquipmentsRepository } from "../../repositories/implementations/EquipmentsRepository";
import { CreateEquipmentController } from "./CreateEquipmentController";
import { CreateEquipmentUseCase } from "./CreateEquipmentUseCase";

const equipmentsRepository = EquipmentsRepository.getInstance();
const createEquipmentUseCase = new CreateEquipmentUseCase(equipmentsRepository);
const createEquipmentController = new CreateEquipmentController(
  createEquipmentUseCase
);
export { createEquipmentController };
