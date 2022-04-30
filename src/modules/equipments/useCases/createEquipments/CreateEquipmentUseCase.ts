import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppErros";
import { IEquipmentsRepository } from "../../repositories/IEquipmentsRepository";

interface IRequest {
  name: string;
  address: string;
  street: string;
  email: string;
}

@injectable()
class CreateEquipmentUseCase {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository
  ) {}

  async execute({ name, address, street, email }: IRequest): Promise<void> {
    const equipmentAlreadyExists = await this.equipmentsRepository.findByName(
      name
    );
    if (equipmentAlreadyExists) {
      throw new AppError("Equipment already exists!");
    }
    this.equipmentsRepository.create({
      name,
      address,
      street,
      email,
    });
  }
}
export { CreateEquipmentUseCase };
