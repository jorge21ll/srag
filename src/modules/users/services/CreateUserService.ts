import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  name: string;
  cpf: string;
  email: string;
  password: string;
}
class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ name, cpf, email, password }: IRequest) {
    const userAlreadyExists = this.usersRepository.findByCpf(cpf);
    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }
    this.usersRepository.create({
      name,
      cpf,
      email,
      password,
    });
  }
}

export { CreateUserService };
