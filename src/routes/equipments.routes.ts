import "reflect-metadata";
import { Router } from "express";

import { CreateEquipmentController } from "../modules/equipments/useCases/createEquipments/CreateEquipmentController";
import { ListEquipmentController } from "../modules/equipments/useCases/listEquipments/ListEquipmentController";

const equipmentsRoutes = Router();

const createEquipmentController = new CreateEquipmentController();
const listEquipmentController = new ListEquipmentController();

equipmentsRoutes.post("/", createEquipmentController.handle);

equipmentsRoutes.get("/", listEquipmentController.handle);
export { equipmentsRoutes };
