import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
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
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
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
