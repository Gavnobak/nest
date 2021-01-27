import {Resolver, Query, Mutation, Args} from "@nestjs/graphql";
import {GraphProductDto} from "./dto/graph-product.dto";
import {ProductsService} from "./products.service";
import {ProductInput, UpdateProductInput} from "./inputs/product.input";

@Resolver()
export class ProductResolver {
    constructor(private readonly productsService: ProductsService) {
    }

    @Query(() => GraphProductDto)
    async product(@Args("id") id:string) {
        return this.productsService.getById(id);
    }

    @Query(() => [GraphProductDto])
    async products() {
        return this.productsService.getAll();
    }

    @Mutation(() => GraphProductDto)
    async createProduct(@Args("input") input:ProductInput) {
        return this.productsService.create(input);
    }

    @Mutation(() => GraphProductDto)
    async updateProduct(@Args("id") id:string, @Args("input") input:UpdateProductInput) {
        return this.productsService.update(id, input);
    }

    @Mutation(() => GraphProductDto)
    async removeProduct(@Args("id") id:string) {
        return this.productsService.remove(id);
    }
}
