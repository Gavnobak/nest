import {ObjectType, Field, ID} from "@nestjs/graphql";
import {GraphProductDto} from "../../products/dto/graph-product.dto";

@ObjectType()
export class GraphProdGroupDto {
    @Field(() => ID)
    readonly _id: string;

    @Field()
    readonly title: string;

    @Field(() => [GraphProductDto])
    readonly members: GraphProductDto[]
}