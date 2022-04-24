import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, cpf, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      cpf,
      email,
      password,
    });
    await this.repository.save(user);
  }
  async findByCpf(cpf: string): Promise<User> {
    const user = await this.repository.findOne({ cpf });
    return user;
  }

  async list(): Promise<User[]> {
    const listUsers = await this.repository.find();
    return listUsers;
  }
  // async update({ name, cpf, email, password }: ICreateUserDTO): Promise<User> {
  //   const updateUser = { name, cpf, email, password };
  //   return updateUser;
  // }
}
export { UsersRepository };
