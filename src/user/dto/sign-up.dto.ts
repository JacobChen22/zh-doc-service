import {Allow, IsNotEmpty} from "class-validator";

export class SignUpDto {

    @Allow()
    name?: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}