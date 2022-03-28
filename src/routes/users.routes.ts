import { Router } from "express";

import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";
import { AlterUserService } from "../modules/users/services/AlterUserService";
import { CreateUserService } from "../modules/users/services/CreateUserService";
import { DeleteUserService } from "../modules/users/services/DeleteUserService";

const usersRoutes = Router();

const usersRepository = new UsersRepository();

usersRoutes.post("/", (request, response) => {
  const { name, cpf, email, password } = request.body;
  const createUserService = new CreateUserService(usersRepository);
  createUserService.execute({
    name,
    cpf,
    email,
    password,
  });
  return response.status(201).send();
});
usersRoutes.get("/", (request, response) => {
  const all = usersRepository.list();
  return response.status(200).json(all);
});
usersRoutes.put("/", (request, response) => {
  const { cpf } = request.headers;
  const alterUserService = new AlterUserService(usersRepository);
});
usersRoutes.delete("/", (request, response) => {
  const { cpf } = request.body;
  const deleteUserService = new DeleteUserService(usersRepository);
  const user = deleteUserService.execute(cpf);
});
export { usersRoutes };
