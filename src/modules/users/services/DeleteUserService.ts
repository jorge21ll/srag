import { UsersRepository } from "../repositories/implementations/UsersRepository";

interface IRequest {
  cpf: string;
}
class DeleteUserService {
  constructor(private usersRepository: UsersRepository) {}
  execute({ cpf }: IRequest) {
    const userAlreadyExists = this.usersRepository.findByCpf(cpf);
    if (!userAlreadyExists) {
      throw new Error("User not found!");
    }
    return userAlreadyExists;
  }
}
export { DeleteUserService };
