import { Module } from '@nestjs/common';
import { ProdgroupService } from './prodgroup.service';
import { ProdgroupController } from './prodgroup.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {ProdGroup, ProdGroupSchema} from "./schemas/prodgroup.schema";
import {Product, ProductSchema} from "../products/schemas/product.schema";
import {ProductGroupResolver} from "./prodgroup.resolver";

@Module({
  controllers: [ProdgroupController],
  providers: [ProdgroupService,ProductGroupResolver],
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: ProductSchema},
      {name: ProdGroup.name, schema: ProdGroupSchema}
    ])
  ]
})
export class ProdgroupModule {}
