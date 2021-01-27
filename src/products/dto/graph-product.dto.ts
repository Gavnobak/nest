import {ObjectType, Field, ID} from "@nestjs/graphql";
import {GraphProdGroupDto} from "../../prodgroup/dto/graph-prodgroup.dto";
import {IsArray, IsOptional, IsString} from "class-validator";

@ObjectType()
export class GraphProductDto {

    @Field(() => ID)
    readonly _id: string;

    @Field()
    readonly title: string;

    @Field(() => [GraphProdGroupDto])
    readonly groups: GraphProdGroupDto[]
}