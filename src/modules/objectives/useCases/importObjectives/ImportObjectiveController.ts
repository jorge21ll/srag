import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportObjectiveUseCase } from "./ImportObjectiveUseCase";

class ImportObjectiveController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importObjectiveUseCase = container.resolve(ImportObjectiveUseCase);

    await importObjectiveUseCase.execute(file);
    return response.status(201).send();
  }
}
export { ImportObjectiveController };
