import {ObjectType, Field, ID} from "@nestjs/graphql";
import {GroupDto} from "../../group/dto/group.dto";

@ObjectType()
export class UserDto {

    @Field()
    readonly id: number;

    @Field()
    readonly firstName: string;

    @Field()
    readonly lastName: string;

    @Field(() => [GroupDto],{nullable: true})
    readonly groups: GroupDto[]

    @Field(() => [UserDto],{nullable: true})
    readonly friends: UserDto[]
}