import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import {Group} from "../group/entities/group.entity";
import {GroupResolver} from "./group.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  controllers: [GroupController],
  providers: [GroupService,GroupResolver]
})
export class GroupModule {}
