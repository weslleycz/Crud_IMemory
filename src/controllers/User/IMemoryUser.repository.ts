import { Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { setError } from "../../errors/setError";
import { UserDTO, UserDTOUpdate } from "./User.dto";

export class IMemoryUserRepository {
  private user = <UserDTO[]>[];

  constructor() {}

  public getAll() {
    return this.user;
  }

  public create({ email, name, password }: UserDTO, res: Response) {
    const index = this.user.findIndex((object) => {
      return object.email === email;
    });
    if (index === -1) {
      const id = uuidv4();
      this.user.push({ email, name, password, id });
    } else {
      setError(400, res, "Usuário já vinculado");
    }
  }

  public delete(id: string, res: Response) {
    const index = this.user.findIndex((object) => {
      return object.id === id;
    });
    if (index !== -1) {
      this.user.splice(index, 1);
    } else {
      setError(400, res, "Usuário não vinculado");
    }
  }

  public update(id: string, res: Response, body: UserDTOUpdate) {
    const index = this.user.findIndex((object) => {
      return object.id === id;
    });
    if (index !== -1) {
      const user = this.user[index]
      this.user[index] = { ...body,...user };
    } else {
      setError(400, res, "Usuário não vinculado");
    }
  }
}
