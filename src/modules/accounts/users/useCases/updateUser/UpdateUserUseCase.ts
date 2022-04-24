import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  cpf: string;
  email: string;
  password: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, cpf, email, password }: IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByCpf(cpf);
    if (!userAlreadyExists) {
      throw new Error("User not exists!");
    }
    userAlreadyExists.cpf = cpf;
    userAlreadyExists.name = name;
    userAlreadyExists.email = email;
    userAlreadyExists.password = password;
  }
}
export { UpdateUserUseCase };
