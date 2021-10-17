import { IsDefined, IsEmail, IsNotEmpty, IsString } from "class-validator";


export class UserDto {
    @IsEmail()
    @IsString()
    @IsDefined()
    email: string;

    @IsString()
    @IsDefined()
    username: string;
}

export class UserParamsDto {
    @IsEmail()
    @IsString()
    @IsDefined()
    email: string;
}