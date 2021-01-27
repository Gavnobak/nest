import {Field, ID, InputType, Int, PartialType} from "@nestjs/graphql";

@InputType()
export class ProdgroupInput {
    @Field()
    readonly title: string;

    @Field(() => [String], {nullable: true})
    readonly members: string[]
}

@InputType()
export class UpdateProdgroupInput extends PartialType(ProdgroupInput) {}
