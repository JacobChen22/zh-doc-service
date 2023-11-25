import {Allow, IsNotEmpty} from "class-validator";

export type DocType = "FILE" | "FOLDER";

export class CreateDocumentDto {

    @IsNotEmpty()
    readonly title: string;

    @Allow()
    readonly body: string;

    @IsNotEmpty()
    readonly creatorId: number;

    @IsNotEmpty()
    readonly updaterId: number;

    @Allow()
    readonly type: DocType;

    @IsNotEmpty()
    readonly spaceId: number;

    @Allow()
    readonly parentDocId: number;
}
