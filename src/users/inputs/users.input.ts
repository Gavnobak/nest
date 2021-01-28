import {Field, InputType, Int, PartialType} from "@nestjs/graphql";
import {IsArray, IsNumber, IsOptional, IsString} from "class-validator";


@InputType()
export class UsersInput {
    @IsString()
    @Field()
    readonly firstName: string;

    @IsString()
    @Field()
    readonly lastName: string;

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    @Field(() => [Int],{nullable: true})
    readonly groups: number[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    @Field(() => [Int],{nullable: true})
    readonly friends: number[]
}

@InputType()
export class UpdateUserInput extends PartialType(UsersInput) {}



