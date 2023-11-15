import {Injectable} from '@nestjs/common';
import {CreateDocumentDto} from './dto/create-document.dto';
import {UpdateDocumentDto} from './dto/update-document.dto';
import {PrismaService} from "../prisma/prisma.service";

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
}
