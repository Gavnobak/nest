import {Resolver, Query, Mutation, Args} from "@nestjs/graphql";
import {UsersService} from "./users.service";
import {UserDto} from "./dto/user.dto";
import {UpdateUserInput, UsersInput} from "./inputs/users.input";

@Resolver()
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {
    }

    @Query(() => UserDto)
    async user(@Args("id") id:number) {
        return this.usersService.findOne(id);
    }

    @Query(() => [UserDto])
    async users() {
        return this.usersService.findAll();
    }

    @Mutation(() => UserDto)
    async createUser(@Args("input") input:UsersInput) {
        return this.usersService.create(input);
    }

    @Mutation(() => UserDto)
    async updateUser(@Args("id") id:number, @Args("input") input:UpdateUserInput) {
        return this.usersService.update(id, input);
    }

    @Mutation(() => UserDto)
    async removeUser(@Args("id") id:number) {
        return this.usersService.remove(id);
    }
}
