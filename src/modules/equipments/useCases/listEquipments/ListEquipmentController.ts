import { Request, Response } from "express";

import { ListEquipmentUseCase } from "./ListEquipmentUseCase";

class ListEquipmentController {
  constructor(private listEquipmentUseCase: ListEquipmentUseCase) {}
  handle(request: Request, response: Response): Response {
    const all = this.listEquipmentUseCase.execute();
    return response.status(200).json(all);
  }
}
export { ListEquipmentController };
