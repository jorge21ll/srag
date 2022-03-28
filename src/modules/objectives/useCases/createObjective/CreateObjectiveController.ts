import { Request, Response } from "express";

import { CreateObjectiveUseCase } from "./CreateObjectiveUseCase";

class CreateObjectiveController {
  constructor(private createObjectiveUseCase: CreateObjectiveUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name } = request.body;
    this.createObjectiveUseCase.execute({
      name,
    });
    return response.status(201).send();
  }
}
export { CreateObjectiveController };
