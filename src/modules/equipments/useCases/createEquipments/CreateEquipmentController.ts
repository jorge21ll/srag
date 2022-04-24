import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateEquipmentUseCase } from "./CreateEquipmentUseCase";

class CreateEquipmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, address, street, email } = request.body;

    const createEquipmentUseCase = container.resolve(CreateEquipmentUseCase);

    await createEquipmentUseCase.execute({
      name,
      address,
      street,
      email,
    });
    return response.status(201).send();
  }
}
export { CreateEquipmentController };
