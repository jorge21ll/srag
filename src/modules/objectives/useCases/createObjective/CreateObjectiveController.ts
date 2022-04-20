import { Request, Response } from "express";

import { CreateObjectiveUseCase } from "./CreateObjectiveUseCase";

class CreateObjectiveController {
  constructor(private createObjectiveUseCase: CreateObjectiveUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    await this.createObjectiveUseCase.execute({
      name,
    });
    return response.status(201).send();
  }
}
export { CreateObjectiveController };
