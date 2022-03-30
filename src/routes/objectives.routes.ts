import { Router } from "express";
import multer from "multer";

import { createObjectiveController } from "../modules/objectives/useCases/createObjective";
import { importObjectiveController } from "../modules/objectives/useCases/importObjectives";
import { listObjectiveController } from "../modules/objectives/useCases/listObjectives";

const objectiveRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

objectiveRoutes.post("/", (request, response) => {
  return createObjectiveController.handle(request, response);
});

objectiveRoutes.get("/", (request, response) => {
  return listObjectiveController.hanlde(request, response);
});
objectiveRoutes.post("/import", upload.single("file"), (request, response) => {
  return importObjectiveController.handle(request, response);
});
export { objectiveRoutes };
