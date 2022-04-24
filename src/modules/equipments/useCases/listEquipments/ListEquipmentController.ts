import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListEquipmentUseCase } from "./ListEquipmentUseCase";

class ListEquipmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listEquipmentsUseCase = container.resolve(ListEquipmentUseCase);
    const all = await listEquipmentsUseCase.execute();
    return response.status(200).json(all);
  }
}
export { ListEquipmentController };
