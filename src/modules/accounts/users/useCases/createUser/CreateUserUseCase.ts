import { inject, injectable } from "tsyringe";

import {
  ICreateUserDTO,
  IUsersRepository,
} from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, cpf, email, password }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByCpf(cpf);
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

export { CreateUserUseCase };
