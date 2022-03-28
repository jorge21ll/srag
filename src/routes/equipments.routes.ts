import { Router } from "express";

import { createEquipmentController } from "../modules/equipments/useCases/createEquipments";
import { listEquipmentController } from "../modules/equipments/useCases/listEquipments";

const equipmentsRoutes = Router();

equipmentsRoutes.post("/", (request, response) => {
  return createEquipmentController.handle(request, response);
});

equipmentsRoutes.get("/", (request, response) => {
  return listEquipmentController.handle(request, response);
});
export { equipmentsRoutes };
