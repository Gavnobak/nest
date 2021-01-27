import {Resolver, Query, Mutation, Args} from "@nestjs/graphql";
import {ProdgroupService} from "./prodgroup.service";
import {GraphProdGroupDto} from "./dto/graph-prodgroup.dto";
import {ProdgroupInput, UpdateProdgroupInput} from "./inputs/prodgroup.input";

@Resolver()
export class ProductGroupResolver {
    constructor(private readonly prodgroupService: ProdgroupService) {
    }

    @Query(() => GraphProdGroupDto)
    async prodGroup(@Args("id") id:string) {
        return this.prodgroupService.findOne(+id);
    }

    @Query(() => [GraphProdGroupDto])
    async productGroups() {
        return this.prodgroupService.findAll();
    }

    @Mutation(() => GraphProdGroupDto)
    async createProductGroup(@Args("input") input:ProdgroupInput) {
        return this.prodgroupService.create(input);
    }

    @Mutation(() => GraphProdGroupDto)
    async updateProductGroup(@Args("id") id:string, @Args("input") input:UpdateProdgroupInput) {
        return this.prodgroupService.update(id, input);
    }

    @Mutation(() => GraphProdGroupDto)
    async removeProductGroup(@Args("id") id:string) {
        return this.prodgroupService.remove(id);
    }
}
