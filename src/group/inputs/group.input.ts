import {Field, InputType, Int, PartialType,} from "@nestjs/graphql";
import {IsArray, IsNumber, IsOptional, IsString} from "class-validator";

@InputType()
export class GroupInput {
    @IsString()
    @Field()
    readonly name: string;

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    @Field(() => [Int],{nullable: true})
    readonly members: number[]
}

@InputType()
export class UpdateGroupInput extends PartialType(GroupInput) {}

