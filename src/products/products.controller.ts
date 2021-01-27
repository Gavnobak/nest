import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from "./schemas/product.schema";
import {IdMongoValidationPipe} from "../shared/validation.pipe";
import {GraphProductDto} from "./dto/graph-product.dto";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {
    }

    @Get()
    getAll(): Promise<Product[]>{
        return this.productsService.getAll()
    }

    @Get(':id')
    getOne(@Param('id', new IdMongoValidationPipe()) id: string): Promise<Product> {
        return this.productsService.getById(id)
    }

    @Post()
    create(@Body() createProductDto: GraphProductDto): Promise<Product>{
        return this.productsService.create(createProductDto)
    }

    @Delete(':id')
    remove(@Param('id', new IdMongoValidationPipe()) id: string): Promise<Product> {
        return this.productsService.remove(id)
    }

    @Put(':id')
    update(@Body(new ValidationPipe()) updateProductDto: Partial<GraphProductDto>,
           @Param('id', new IdMongoValidationPipe()) id: string): Promise<Product> {
        return this.productsService.update(id, updateProductDto)
    }
}
