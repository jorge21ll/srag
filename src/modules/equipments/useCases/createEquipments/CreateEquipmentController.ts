import { Request, Response } from "express";

import { CreateEquipmentUseCase } from "./CreateEquipmentUseCase";

class CreateEquipmentController {
  constructor(private createEquipmentUseCase: CreateEquipmentUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, address, street, email } = request.body;
    this.createEquipmentUseCase.execute({
      name,
      address,
      street,
      email,
    });
    return response.status(201).send();
  }
}
export { CreateEquipmentController };
