import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from "./schemas/product.schema";
import {IdMongoValidationPipe} from "../shared/validation.pipe";
import {CreateProductDto, UpdateProductDto} from "./dto/create-product.dto";

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
    create(@Body() createProductDto: CreateProductDto): Promise<Product>{
        return this.productsService.create(createProductDto)
    }

    @Delete(':id')
    remove(@Param('id', new IdMongoValidationPipe()) id: string) {
        return this.productsService.remove(id)
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto,
           @Param('id', new IdMongoValidationPipe()) id: string): Promise<Product> {
        return this.productsService.update(id, updateProductDto)
    }
}
