import "reflect-metadata";
import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateObjectiveController } from "../modules/objectives/useCases/createObjective/CreateObjectiveController";
import { ImportObjectiveController } from "../modules/objectives/useCases/importObjectives/ImportObjectiveController";
import { ListObjectiveController } from "../modules/objectives/useCases/listObjectives/ListObjectiveController";

const objectiveRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createObjectiveController = new CreateObjectiveController();
const importObjectiveController = new ImportObjectiveController();
const listObjectiveController = new ListObjectiveController();

objectiveRoutes.use(ensureAuthenticated);
objectiveRoutes.post("/", createObjectiveController.handle);

objectiveRoutes.get("/", listObjectiveController.hanlde);

objectiveRoutes.post(
  "/import",
  upload.single("file"),
  importObjectiveController.handle
);
export { objectiveRoutes };
