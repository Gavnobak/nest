import {Field, ID, InputType, Int, ObjectType, PartialType} from "@nestjs/graphql";


@InputType()
export class UsersInput {

    @Field(() => [Int],{nullable: true})
    readonly id: number;

    @Field()
    readonly firstName: string;

    @Field()
    readonly lastName: string;

    @Field(() => [Int],{nullable: true})
    readonly groups: number[]

    @Field(() => [Int],{nullable: true})
    readonly friends: number[]
}

@InputType()
export class UpdateUserInput extends PartialType(UsersInput) {}



