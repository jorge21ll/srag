import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/users/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateController.handle);
export { authenticateRoutes };
