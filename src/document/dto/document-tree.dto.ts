import {DocType} from "./create-document.dto";

export interface DocumentTree {
    title: string,
    key: string,
    type: DocType,
    children?: DocumentTree[],
}