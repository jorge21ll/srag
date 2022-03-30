import { Request, Response } from "express";

import { ListObjectiveUseCase } from "./ListObjectiveUseCase";

class ListObjectiveController {
  constructor(private listObjectiveUseCase: ListObjectiveUseCase) {}
  hanlde(request: Request, response: Response) {
    const allObjectives = this.listObjectiveUseCase.execute();
    return response.status(200).json(allObjectives);
  }
}
export { ListObjectiveController };
