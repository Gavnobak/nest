import {Field, InputType, PartialType} from "@nestjs/graphql";
import {IsArray, IsOptional, IsString} from "class-validator";

@InputType()
export class ProdgroupInput {
    @IsString()
    @Field()
    readonly title: string;

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    @Field(() => [String], {nullable: true})
    readonly members: string[]
}

@InputType()
export class UpdateProdgroupInput extends PartialType(ProdgroupInput) {}
