import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  cpf: string;
  email: string;
  password: string;
}

interface IUsersRepository {
  findByName(name: string): User;
  findByCpf(cpf: string): User;
  list(): User[];
  create({ name, cpf, email, password }: ICreateUserDTO): void;
}
export { IUsersRepository, ICreateUserDTO };
