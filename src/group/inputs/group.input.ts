import {Field, ID, InputType, Int, PartialType,} from "@nestjs/graphql";

@InputType()
export class GroupInput {
    @Field(() => [Int],{nullable: true})
    readonly id: number;

    @Field()
    readonly name: string;

    @Field(() => [Int],{nullable: true})
    readonly members: number[]
}

@InputType()
export class UpdateGroupInput extends PartialType(GroupInput) {}

