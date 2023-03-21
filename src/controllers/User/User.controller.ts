import {
  Body,
  Controller,
  Delete,
  Get,
  Params,
  Post,
  Put,
  Response,
} from "@decorators/express";
import { Response as IResponse } from "express";
import { makeValidateBody } from "express-class-validator";
import { GenericError } from "../../errors/GenericError";
import { IMemoryUserRepository } from "./IMemoryUser.repository";
import { UserDTO, UserDTOUpdate } from "./User.dto";

@Controller("/user")
export class User {
  constructor(private userRepository = new IMemoryUserRepository()) {}
  @Get("")
  public async findAll(@Response() res: IResponse) {
    const users = this.userRepository.getAll();
    return res.status(200).json({ error: false, users });
  }

  @Post("", [makeValidateBody(UserDTO)])
  @GenericError
  public create(@Response() res: IResponse, @Body() body: UserDTO) {
    this.userRepository.create(body, res);
    return res.status(200).json({ error: false, message: "created" });
  }

  @Delete("/:id")
  @GenericError
  public delete(@Response() res: IResponse, @Params("id") id: string) {
    this.userRepository.delete(id, res);
    return res.status(200).json({ error: false, message: "delete" });
  }

  @Put("/:id")
  public update(
    @Response() res: IResponse,
    @Params("id") id: string,
    @Body() body: UserDTOUpdate
  ) {
    this.userRepository.update(id, res, body);
    return res.status(200).json({ error: false, message: "update" });
  }
}
