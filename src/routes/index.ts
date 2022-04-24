import "reflect-metadata";
import { Router } from "express";

import { equipmentsRoutes } from "./equipments.routes";
import { objectiveRoutes } from "./objectives.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/equipments", equipmentsRoutes);
router.use("/users", usersRoutes);
router.use("/objectives", objectiveRoutes);

export { router };
