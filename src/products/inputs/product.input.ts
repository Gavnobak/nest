import {Field, InputType, PartialType} from "@nestjs/graphql";
import {IsArray, IsOptional, IsString} from "class-validator";

@InputType()
export class ProductInput {
    @IsString()
    @Field()
    readonly title: string;

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    @Field(() => [String], {nullable: true})
    readonly groups: string[]
}

@InputType()
export class UpdateProductInput extends PartialType(ProductInput) {}