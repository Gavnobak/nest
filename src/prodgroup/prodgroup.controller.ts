import {Controller, Get, Post, Body, Put, Param, Delete, Logger, UsePipes, ValidationPipe} from '@nestjs/common';
import { ProdgroupService } from './prodgroup.service';
import { CreateProdgroupDto } from './dto/create-prodgroup.dto';
import {IdMongoValidationPipe} from "../shared/validation.pipe";

@Controller('prodgroup')
export class ProdgroupController {

  constructor(private readonly prodgroupService: ProdgroupService) {}


  @Post()
  create(@Body() createProdgroupDto: CreateProdgroupDto) {
    return this.prodgroupService.create(createProdgroupDto);
  }

  @Get()
  findAll() {
    return this.prodgroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new IdMongoValidationPipe()) id: string) {
    return this.prodgroupService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id', new IdMongoValidationPipe()) id: string,
         @Body(new ValidationPipe()) updateProdgroupDto: Partial<CreateProdgroupDto>) {
    return this.prodgroupService.update(id, updateProdgroupDto);
  }

  @Delete(':id')
  remove(@Param('id', new IdMongoValidationPipe()) id: string) {
    return this.prodgroupService.remove(id);
  }
}
