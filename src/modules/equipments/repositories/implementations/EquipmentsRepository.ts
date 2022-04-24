import { getRepository, Repository } from "typeorm";

import { Equipment } from "../../entities/Equipment";
import {
  ICreateEquipmentDTO,
  IEquipmentsRepository,
} from "../IEquipmentsRepository";

class EquipmentsRepository implements IEquipmentsRepository {
  private repository: Repository<Equipment>;

  constructor() {
    this.repository = getRepository(Equipment);
  }

  async create({
    name,
    address,
    street,
    email,
  }: ICreateEquipmentDTO): Promise<void> {
    const equipment = this.repository.create({
      name,
      address,
      street,
      email,
    });
    await this.repository.save(equipment);
  }

  async list(): Promise<Equipment[]> {
    const equipments = await this.repository.find();
    return equipments;
  }

  async findByName(name: string): Promise<Equipment> {
    const equipment = await this.repository.findOne({ name });
    return equipment;
  }
}

export { EquipmentsRepository };
