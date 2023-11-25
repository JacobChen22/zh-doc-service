import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards} from '@nestjs/common';
import {DocumentService} from './document.service';
import {CreateDocumentDto} from './dto/create-document.dto';
import {UpdateDocumentDto} from './dto/update-document.dto';
import JwtAuthGuard from "../auth/jwt-auth-guard.config";

@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {
  }

  @Post()
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentService.create(createDocumentDto);
  }

  @Get()
  findAll() {
    return this.documentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.documentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDocumentDto: UpdateDocumentDto) {
    return this.documentService.update(id, updateDocumentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.documentService.remove(id);
  }

  @Get('space/:id')
  findSpaceDocTree(@Param('id', ParseIntPipe) spaceId: number) {
    return this.documentService.findSpaceDocTree(spaceId);
  }
}
