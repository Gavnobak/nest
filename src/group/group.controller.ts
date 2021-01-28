import {Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { GroupService } from './group.service';
import {GroupRestDto, UpdateGroupRestDto} from './dto/group-rest.dto';
import {Group} from "./entities/group.entity";

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body() createGroupDto: GroupRestDto) {
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
         @Body() updateGroupDto: UpdateGroupRestDto): Promise<Group> {
    return this.groupService.update(+id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: string) {
    return this.groupService.remove(+id);
  }
}
