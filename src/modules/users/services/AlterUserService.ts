import { UsersRepository } from "../repositories/implementations/UsersRepository";

interface IRequest {
  name: string;
  cpf: string;
  email: string;
  password: string;
}
class AlterUserService {
  constructor(private usersRepository: UsersRepository) {}
  execute({ name, cpf, email, password }: IRequest): void {
    const userAlreadyExists = this.usersRepository.findByCpf(cpf);
    if (!userAlreadyExists) {
      throw new Error("User not exists!");
    }
  }
}
export { AlterUserService };
