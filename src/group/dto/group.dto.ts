import {ObjectType, Field, ID, Int} from "@nestjs/graphql";
import {UserDto} from "../../users/dto/user.dto";

@ObjectType()
export class GroupDto {

    @Field()
    readonly id: number;

    @Field()
    readonly name: string;

    @Field(() => [UserDto],{nullable: true})
    readonly members: UserDto[]
}