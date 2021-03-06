import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  findByCpf(cpf: string): Promise<User>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  list(): Promise<User[]>;
  create(data: ICreateUserDTO): Promise<void>;
}
export { IUsersRepository, ICreateUserDTO };
