import {Field, ID, InputType, Int, PartialType} from "@nestjs/graphql";

@InputType()
export class ProductInput {
    @Field()
    readonly title: string;

    @Field(() => [String], {nullable: true})
    readonly groups: string[]
}

@InputType()
export class UpdateProductInput extends PartialType(ProductInput) {}