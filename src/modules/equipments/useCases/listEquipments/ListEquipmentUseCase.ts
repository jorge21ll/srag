import { inject, injectable } from "tsyringe";

import { Equipment } from "../../entities/Equipment";
import { IEquipmentsRepository } from "../../repositories/IEquipmentsRepository";

@injectable()
class ListEquipmentUseCase {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository
  ) {}
  async execute(): Promise<Equipment[]> {
    const equipments = await this.equipmentsRepository.list();
    return equipments;
  }
}

export { ListEquipmentUseCase };
