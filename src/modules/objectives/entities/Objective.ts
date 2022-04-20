import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("objectives")
class Objective {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Objective };
