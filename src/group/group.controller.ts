import {Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupRestDto } from './dto/group-rest.dto';
import {Group} from "./entities/group.entity";

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body(new ValidationPipe()) createGroupDto: GroupRestDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  findAll(){
    return this.groupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: string): Promise<Group>  {
    return this.groupService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: string,
         @Body(new ValidationPipe()) updateGroupDto: Partial<GroupRestDto>): Promise<Group> {
    return this.groupService.update(+id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: string) {
    return this.groupService.remove(+id);
  }
}
