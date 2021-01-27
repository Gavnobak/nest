import { Module } from '@nestjs/common';
import {ProductsService} from "./products.service";
import {ProductsController} from "./products.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Product, ProductSchema} from "./schemas/product.schema";
import {ProdGroup, ProdGroupSchema} from "../prodgroup/schemas/prodgroup.schema";
import {ProductResolver} from "./product.resolver";

@Module({
    providers: [ProductsService,ProductResolver],
    controllers: [ProductsController],
    imports: [
        MongooseModule.forFeature([
            {name: Product.name, schema: ProductSchema},
            {name: ProdGroup.name, schema: ProdGroupSchema}
        ])
    ]
})
export class ProductsModule {}
