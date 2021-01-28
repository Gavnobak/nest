import {Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import {UpdateUserRestDto, UserRestDto} from './dto/user-rest.dto';
import {User} from "./entities/user.entity";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: UserRestDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(){
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: string): Promise<User>  {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: string,
         @Body() updateUserDto: UpdateUserRestDto): Promise<User> {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: string) {
    return this.usersService.remove(+id);
  }
}
