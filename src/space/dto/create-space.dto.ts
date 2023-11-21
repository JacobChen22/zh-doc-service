import {Allow, IsNotEmpty} from "class-validator";

export class CreateSpaceDto {

    @IsNotEmpty()
    readonly name: string;

    @Allow()
    readonly body: string;

}
