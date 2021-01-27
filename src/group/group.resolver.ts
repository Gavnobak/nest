import {Resolver, Query, Mutation, Args} from "@nestjs/graphql";
import {GroupService} from "./group.service";
import {GroupDto} from "./dto/group.dto";
import {GroupInput, UpdateGroupInput} from "./inputs/group.input";

@Resolver()
export class GroupResolver {
    constructor(private readonly groupService: GroupService) {
    }

    @Query(() => GroupDto)
    async group(@Args("id") id:string) {
        return this.groupService.findOne(+id);
    }

    @Query(() => [GroupDto])
    async groups() {
        return this.groupService.findAll();
    }

    @Mutation(() => GroupDto)
    async createGroup(@Args("input") input:GroupInput) {
        return this.groupService.create(input);
    }

    @Mutation(() => GroupDto)
    async updateGroup(@Args("id") id:string, @Args("input") input:UpdateGroupInput) {
        return this.groupService.update(+id, input);
    }

    @Mutation(() => GroupDto)
    async removeGroup(@Args("id") id:string) {
        return this.groupService.remove(+id);
    }
}
