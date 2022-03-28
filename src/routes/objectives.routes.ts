import { Router } from "express";

import { ObjectivesRepositoy } from "../modules/objectives/repositories/implementations/ObjectivesRepository";
import { createObjectiveController } from "../modules/objectives/useCases/createObjective";

const objectiveRoutes = Router();
const objectivesRepository = new ObjectivesRepositoy();

objectiveRoutes.post("/", (request, response) => {
  return createObjectiveController.handle(request, response);
});

objectiveRoutes.get("/", (request, response) => {
  const allObjectives = objectivesRepository.list();
  return response.status(200).json(allObjectives);
});
export { objectiveRoutes };
