import { UsersRepository } from "../repositories/implementations/UsersRepository";

class ListUserService {
  constructor(private usersRepository: UsersRepository) {}
  execute() {
    return this.usersRepository.list();
  }
}
export { ListUserService };
