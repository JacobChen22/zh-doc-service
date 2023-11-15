import {Allow, IsNotEmpty} from "class-validator";

export class CreateDocumentDto {

    @IsNotEmpty()
    readonly title: string;

    @Allow()
    readonly body: string;
}
