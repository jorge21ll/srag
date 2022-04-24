import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, email, password } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({
      name,
      cpf,
      email,
      password,
    });
    return response.status(201).json(updateUserUseCase);
  }
}

export { UpdateUserController };
