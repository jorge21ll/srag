import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }
  findByName(name: string): User {
    console.log(name);
    throw new Error("Method not implemented.");
  }
  create({ name, cpf, email, password }: ICreateUserDTO): void {
    const user = new User();
    Object.assign(user, {
      name,
      cpf,
      email,
      password,
      created_at: new Date(),
    });
    this.users.push(user);
  }
  findByCpf(cpf: string): User {
    const user = this.users.find((user) => user.cpf === cpf);
    return user;
  }

  list(): User[] {
    return this.users;
  }
}
export { UsersRepository };
