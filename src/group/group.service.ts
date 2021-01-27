import { Injectable } from '@nestjs/common';
import { GroupRestDto } from './dto/group-rest.dto';
import { Group } from './entities/group.entity';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";


@Injectable()
export class GroupService {

  constructor(@InjectRepository(Group) private readonly groupRepository: Repository<Group>) {
  }

  async create(createGroupDto: any) {
    if (createGroupDto.members) createGroupDto.members = this.objectivation(createGroupDto.members);
    let newGroup = await this.groupRepository.save(createGroupDto);
    return this.groupRepository.findOne(newGroup.id,{relations:["members"]});
  }

  async findAll(): Promise<Group[]> {
    return this.groupRepository.find({relations:["members"]});
  }

  async findOne(id: number): Promise<Group>  {
    return this.groupRepository.findOne(id,{relations:["members"]});
  }

  async update(id: number, updateGroupDto: any) {
    if (updateGroupDto.members) updateGroupDto.members = this.objectivation(updateGroupDto.members);
    let updGroup = await this.groupRepository.save(updateGroupDto);
    return this.groupRepository.findOne(updGroup.id,{relations:["members"]});
  }

  async remove(id: number): Promise<any>  {
    return this.groupRepository.delete(id);
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
