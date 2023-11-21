import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards} from '@nestjs/common';
import {SpaceService} from './space.service';
import {CreateSpaceDto} from './dto/create-space.dto';
import {UpdateSpaceDto} from './dto/update-space.dto';
import JwtAuthGuard from "../auth/jwt-auth-guard.config";

@Controller('space')
export class SpaceController {
  constructor(private readonly spaceService: SpaceService) {
  }

  @Post()
  create(@Body() createDocumentDto: CreateSpaceDto) {
    return this.spaceService.create(createDocumentDto);
  }

  @Get()
  findAll() {
    return this.spaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.spaceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDocumentDto: UpdateSpaceDto) {
    return this.spaceService.update(id, updateDocumentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.spaceService.remove(id);
  }
}
