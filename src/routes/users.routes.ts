import "reflect-metadata";
import { Router } from "express";

import { CreateUserController } from "../modules/accounts/users/useCases/createUser/CreateUserController";
import { ListUserController } from "../modules/accounts/users/useCases/listUser/ListUserController";
import { UpdateUserController } from "../modules/accounts/users/useCases/updateUser/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserControlerr = new ListUserController();
const updateUserController = new UpdateUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", listUserControlerr.handle);
usersRoutes.put("/", updateUserController.handle);
// usersRoutes.delete("/", (request, response) => {
//   const { cpf } = request.body;
//   const deleteUserService = new DeleteUserService(usersRepository);
//   const user = deleteUserService.execute(cpf);
// });
export { usersRoutes };
