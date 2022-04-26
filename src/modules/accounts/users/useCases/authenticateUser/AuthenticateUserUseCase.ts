import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    email: string;
    name: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Usuário existe?
    const user = this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    // Senha está correta?
    const passwordMath = await compare(password, (await user).password);
    if (!passwordMath) {
      throw new Error("Email or password incorrect!");
    }
    // Gerar webtoken
    const token = sign({}, "82cd8d03d6c328939703c92b8ff04ba7", {
      subject: (await user).id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: (await user).name,
        email: (await user).email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
