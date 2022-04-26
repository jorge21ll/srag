import "reflect-metadata";
import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { equipmentsRoutes } from "./equipments.routes";
import { objectiveRoutes } from "./objectives.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/equipments", equipmentsRoutes);
router.use("/users", usersRoutes);
router.use("/objectives", objectiveRoutes);
router.use(authenticateRoutes);

export { router };
