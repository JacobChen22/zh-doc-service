import {Allow, IsNotEmpty} from "class-validator";

export class CreateDocumentDto {

    @IsNotEmpty()
    readonly title: string;

    @Allow()
    readonly body: string;

    @IsNotEmpty()
    readonly creatorId: number;

    @IsNotEmpty()
    readonly updaterId: number;
}
