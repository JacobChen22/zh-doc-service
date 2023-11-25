import {Injectable} from '@nestjs/common';
import {CreateDocumentDto, DocType} from './dto/create-document.dto';
import {UpdateDocumentDto} from './dto/update-document.dto';
import {PrismaService} from "../prisma/prisma.service";
import {DocumentTree} from "./dto/document-tree.dto";

@Injectable()
export class DocumentService {

    constructor(private prisma: PrismaService) {
    }

    create(createDocumentDto: CreateDocumentDto) {
        return this.prisma.document.create({
            data: createDocumentDto
        });
    }

    findAll() {
        return this.prisma.document.findMany();
    }

    findOne(id: number) {
        return this.prisma.document.findUnique({
            where: {id: id}
        });
    }

    update(id: number, updateDocumentDto: UpdateDocumentDto) {
        return this.prisma.document.update({
            where: {id: id},
            data: updateDocumentDto
        });
    }

    remove(id: number) {
        return this.prisma.document.delete({
            where: {id: id}
        });
    }

    async findSpaceDocTree(spaceId: number) {
        const spaceDocs = await this.prisma.document.findMany({
            where: {spaceId: spaceId},
            select: {
                id: true,
                title: true,
                parentDocId: true,
                type: true
            }
        });
        return this.buildTree(spaceDocs);
    }

    buildTree(documents: {
        id: number,
        title: string,
        parentDocId: number,
        type: DocType
    }[], parentId: number | null = null): DocumentTree[] {
        return documents.filter(document => document.parentDocId === parentId)
            .map(document => {
                const node: DocumentTree = {
                    key: String(document.id),
                    title: document.title,
                    type: document.type,
                }
                const children = this.buildTree(documents, document.id);
                if (children.length > 0) {
                    node.children = children;
                }
                return node;
            });
    }

}
