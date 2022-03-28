import { v4 as uuidV4 } from "uuid";

class Objective {
  id: string;
  id_users: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Objective };
