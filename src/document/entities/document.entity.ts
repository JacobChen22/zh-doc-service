import {DocType} from "../dto/create-document.dto";

export class Document {
    id: number;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    spaceId: number;
    parentDocId: number;
    type: DocType;
}
