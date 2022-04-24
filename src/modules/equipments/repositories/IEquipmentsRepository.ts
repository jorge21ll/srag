import { Equipment } from "../entities/Equipment";

interface ICreateEquipmentDTO {
  name: string;
  address: string;
  street: string;
  email: string;
}
interface IEquipmentsRepository {
  findByName(name: string): Promise<Equipment>;
  list(): Promise<Equipment[]>;
  create({ name, address, street, email }: ICreateEquipmentDTO): Promise<void>;
}
export { IEquipmentsRepository, ICreateEquipmentDTO };
