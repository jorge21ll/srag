import { Equipment } from "../../model/Equipment";
import { IEquipmentsRepository } from "../../repositories/IEquipmentsRepository";

class ListEquipmentUseCase {
  constructor(private equipmentsRepository: IEquipmentsRepository) {}
  execute(): Equipment[] {
    const equipments = this.equipmentsRepository.list();
    return equipments;
  }
}

export { ListEquipmentUseCase };
