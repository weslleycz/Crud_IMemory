import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class UserDTO {
  @IsNotEmpty({ message: "Você precisa informar o seu email" })
  @IsString()
  @IsEmail({}, { message: "Este não é um e-mail" })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: "Esse campo e obrigatório" })
  @IsString()
  @MinLength(8, {
    message: "Uma senha forte deve conter no mínimo 8 caracteres",
  })
  @MaxLength(20, {
    message: "Uma senha forte deve conter no máximo 20 caracteres",
  })
  password!: string;

  @IsString()
  @IsNotEmpty({ message: "Esse campo e obrigatório" })
  name!: string;

  id!: string;
}

export class UserDTOUpdate {
  @IsNotEmpty({ message: "Você precisa informar o seu email" })
  @IsOptional()
  @IsEmail({}, { message: "Este não é um e-mail" })
  email!: string;

  @IsString()
  @IsOptional({ message: "Esse campo e obrigatório" })
  @IsString()
  @MinLength(8, {
    message: "Uma senha forte deve conter no mínimo 8 caracteres",
  })
  @MaxLength(20, {
    message: "Uma senha forte deve conter no máximo 20 caracteres",
  })
  password!: string;

  @IsString()
  @IsOptional({ message: "Esse campo e obrigatório" })
  name!: string;

  id!: string;
}
