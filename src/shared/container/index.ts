import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/users/repositories/IUsersRepository";
import { IEquipmentsRepository } from "../../modules/equipments/repositories/IEquipmentsRepository";
import { EquipmentsRepository } from "../../modules/equipments/repositories/implementations/EquipmentsRepository";
import { ObjectivesRepository } from "../../modules/objectives/repositories/implementations/ObjectivesRepository";
import { IObjectivesRepository } from "../../modules/objectives/repositories/IObjectivesRepository";

container.registerSingleton<IObjectivesRepository>(
  "ObjectivesRepository",
  ObjectivesRepository
);

container.registerSingleton<IEquipmentsRepository>(
  "EquipmentsRepository",
  EquipmentsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
