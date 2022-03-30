import { IEquipmentsRepository } from "../../repositories/IEquipmentsRepository";

interface IRequest {
  name: string;
  address: string;
  street: string;
  email: string;
}
class CreateEquipmentUseCase {
  constructor(private equipmentsRepository: IEquipmentsRepository) {}
  execute({ name, address, street, email }: IRequest): void {
    const equipmentAlreadyExists = this.equipmentsRepository.findByName(name);
    if (equipmentAlreadyExists) {
      throw new Error("Equipment already exists!");
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
