import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateObjectiveUseCase } from "./CreateObjectiveUseCase";

class CreateObjectiveController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createObjectiveUseCase = container.resolve(CreateObjectiveUseCase);

    await createObjectiveUseCase.execute({
      name,
    });
    return response.status(201).send();
  }
}
export { CreateObjectiveController };
