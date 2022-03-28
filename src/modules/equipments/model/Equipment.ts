import { v4 as uuidV4 } from "uuid";

class Equipment {
  id: string;
  name: string;
  address: string;
  street: string;
  email: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Equipment };
