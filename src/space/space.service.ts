import {Injectable} from '@nestjs/common';
import {CreateSpaceDto} from './dto/create-space.dto';
import {UpdateSpaceDto} from './dto/update-space.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class SpaceService {

    constructor(private prisma: PrismaService) {
    }

    create(createSpaceDto: CreateSpaceDto) {
        return this.prisma.space.create({
            data: createSpaceDto
        });
    }

    findAll() {
        return this.prisma.space.findMany();
    }

    findOne(id: number) {
        return this.prisma.space.findUnique({
            where: {id: id}
        });
    }

    update(id: number, updateSpaceDto: UpdateSpaceDto) {
        return this.prisma.space.update({
            where: {id: id},
            data: updateSpaceDto
        });
    }

    remove(id: number) {
        return this.prisma.space.delete({
            where: {id: id}
        });
    }
}
