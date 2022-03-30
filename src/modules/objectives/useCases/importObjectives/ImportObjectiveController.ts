import { Request, Response } from "express";

import { ImportObjectiveUseCase } from "./ImportObjectiveUseCase";

class ImportObjectiveController {
  constructor(private importObjectiveUseCase: ImportObjectiveUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importObjectiveUseCase.execute(file);
    return response.send();
  }
}
export { ImportObjectiveController };
