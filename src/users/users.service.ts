import { Injectable } from '@nestjs/common';
import { UserRestDto } from './dto/user-rest.dto';
import { User } from './entities/user.entity';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";


@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
  }

  async create(createUserDto: any): Promise<User> {
    if (createUserDto.groups) createUserDto.groups = this.objectivation(createUserDto.groups);
    if (createUserDto.friends) createUserDto.friends = this.objectivation(createUserDto.friends);
    const newUser = await this.userRepository.save(createUserDto);
    return this.userRepository.findOne(newUser.id,{relations:["groups","friends"]});
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({relations:["groups","friends"]});
  }

  async findOne(id: number): Promise<User>  {
    return this.userRepository.findOne(id,{relations:["groups","friends"]});
  }

  async update(id: number, updateUserDto: any) {
    if (updateUserDto.groups) updateUserDto.groups = this.objectivation(updateUserDto.groups);
    if (updateUserDto.friends) updateUserDto.friends = this.objectivation(updateUserDto.friends);
    updateUserDto.id = id;
    await this.userRepository.save(updateUserDto);
    return this.userRepository.findOne(id,{relations:["groups","friends"]});
  }

  async remove(id: number): Promise<any>  {
    return this.userRepository.delete(id);
  }

  objectivation(numberArray): any {
    numberArray = numberArray.map((numberId) => {
        return {
          id: numberId,
        };
      });

    return numberArray;
  }
}

