import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListObjectiveUseCase } from "./ListObjectiveUseCase";

class ListObjectiveController {
  async hanlde(request: Request, response: Response): Promise<Response> {
    const listObjectivesUseCase = container.resolve(ListObjectiveUseCase);
    const all = await listObjectivesUseCase.execute();
    return response.status(200).json(all);
  }
}
export { ListObjectiveController };
