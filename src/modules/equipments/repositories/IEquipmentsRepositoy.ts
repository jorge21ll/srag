import { Equipment } from "../model/Equipment";

interface ICreateEquipmentDTO {
  name: string;
  address: string;
  street: string;
  email: string;
}
interface IEquipmentsRepository {
  findByName(name: string): Equipment;
  findById(id: string): Equipment;
  list(): Equipment[];
  create({ name, address, street, email }: ICreateEquipmentDTO): void;
}
export { IEquipmentsRepository, ICreateEquipmentDTO };
