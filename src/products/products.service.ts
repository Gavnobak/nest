import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
const ObjectId = require('mongoose').Types.ObjectId;
import {Model} from "mongoose";
import {CreateProductDto} from "./dto/create-product.dto";
import {Product, ProductDocument} from "./schemas/product.schema";
import {ProdGroup, ProductGroup} from "../prodgroup/schemas/prodgroup.schema";


@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
        @InjectModel(ProdGroup.name) private prodgroupModel: Model<ProductGroup>) {
    }

    async getAll(): Promise<Product[]> {
        return this.productModel.find().populate("groups",['title']).exec()
    }

    async getById(id: string): Promise<Product> {
        return this.productModel.findById(id).populate("groups",['title']).exec()
    }

    async create(productDto: any): Promise<Product> {
        const newProduct = new this.productModel(productDto),
                save = await newProduct.save();
        if (save.groups && save.groups.length){
            await this.prodgroupModel.updateMany(
                {_id:{$in:save.groups}},
                {$push: {members: ObjectId(save._id)}});
            return this.productModel.findById(save._id).populate("groups",['title']).exec()
        }
        return this.productModel.findById(save._id).populate("groups",['title']).exec()
    }

    async remove(id: string): Promise<Product> {
        const remove = await this.productModel.findByIdAndRemove(id, {useFindAndModify: false});
        if (remove.groups && remove.groups.length){
            await this.prodgroupModel.updateMany(
                {_id:{$in:remove.groups}},
                {$pull: {members: ObjectId(id)}});
            return remove
        }
        return remove
    }
s
    async update(id: string, productDto: any): Promise<any> {
        const Result = await this.productModel.findByIdAndUpdate(id, productDto, {useFindAndModify: false});
        productDto = JSON.parse(JSON.stringify(productDto));
        if (productDto.hasOwnProperty('groups')) {
            let oldGr:any[] = Result.groups.slice(),
                newGr:any[] = productDto.groups.slice(),
                arrQuery:any[] = [];
            newGr.forEach(element => {
                if (oldGr.includes(element)) {
                    const index: number = oldGr.indexOf(element);
                    if (index !== -1) {
                        oldGr.splice(index, 1);
                        newGr.splice(index, 1);
                    }
                }
            });
            if (oldGr.length) {arrQuery.push(
                {updateMany: {
                        filter: {_id:{$in:oldGr}},
                        update:{$pull: {members: ObjectId(id)}}
                    }}
            )}
            if (newGr.length) {arrQuery.push(
                {updateMany: {
                        filter: {_id:{$in:newGr}},
                        update:{$push: {members: ObjectId(id)}}
                    }}
            )}
            if (arrQuery.length){
                await this.prodgroupModel.bulkWrite(arrQuery);
                return this.productModel.findById(id).populate("groups",['title']).exec()
            }
        } else return this.productModel.findById(id).populate("groups",['title']).exec()

    }
}
