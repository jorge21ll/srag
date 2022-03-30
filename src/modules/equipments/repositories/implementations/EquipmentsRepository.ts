import { Equipment } from "../../model/Equipment";
import {
  ICreateEquipmentDTO,
  IEquipmentsRepository,
} from "../IEquipmentsRepository";

class EquipmentsRepository implements IEquipmentsRepository {
  private equipments: Equipment[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: EquipmentsRepository;

  private constructor() {
    this.equipments = [];
  }

  public static getInstance(): EquipmentsRepository {
    if (!EquipmentsRepository.INSTANCE) {
      EquipmentsRepository.INSTANCE = new EquipmentsRepository();
    }
    return EquipmentsRepository.INSTANCE;
  }
  findById(id: string): Equipment {
    console.log(id);
    throw new Error("Method not implemented.");
  }
  create({ name, address, street, email }: ICreateEquipmentDTO): void {
    const equipment = new Equipment();
    Object.assign(equipment, {
      name,
      address,
      street,
      email,
      created_at: new Date(),
    });
    this.equipments.push(equipment);
  }

  list(): Equipment[] {
    return this.equipments;
  }

  findByName(name: string): Equipment {
    const equipment = this.equipments.find(
      (equipment) => equipment.name === name
    );
    return equipment;
  }
}

export { EquipmentsRepository };
