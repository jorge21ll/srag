import { EquipmentsRepository } from "../../repositories/implementations/EquipmentsRepository";
import { ListEquipmentController } from "./ListEquipmentController";
import { ListEquipmentUseCase } from "./ListEquipmentUseCase";

const equipmentsRepository = EquipmentsRepository.getInstance();
const listEquipmentUseCase = new ListEquipmentUseCase(equipmentsRepository);
const listEquipmentController = new ListEquipmentController(
  listEquipmentUseCase
);
export { listEquipmentController };
