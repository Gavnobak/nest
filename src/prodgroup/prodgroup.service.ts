import { Injectable } from '@nestjs/common';
import { CreateProdgroupDto } from './dto/create-prodgroup.dto';
const ObjectId = require('mongoose').Types.ObjectId;
import {Product, ProductDocument} from "../products/schemas/product.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ProdGroup, ProductGroup} from "./schemas/prodgroup.schema";

@Injectable()
export class ProdgroupService {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>,
              @InjectModel(ProdGroup.name) private prodgroupModel: Model<ProductGroup>) {
  }

  async create(createProdgroupDto: CreateProdgroupDto): Promise<ProdGroup> {
    const newGroup = new this.prodgroupModel(createProdgroupDto),
        save = await newGroup.save();
    if (save.members && save.members.length){
      await this.productModel.updateMany(
         {_id:{$in:save.members}},
        {$push: {groups: ObjectId(save._id)}});
      return this.prodgroupModel.findById(save._id).populate("members",['title']).exec()
    }
    return this.prodgroupModel.findById(save._id).populate("members",['title']).exec()
  }

  async findAll(): Promise<ProdGroup[]> {
    return this.prodgroupModel.find().populate("members",['title']).exec()
  }

  findOne(id: number) {
    return this.prodgroupModel.findById(id).populate("members",['title']).exec()
  }

  async update(id: string, updateProdgroupDto: any): Promise<ProdGroup> {
    const Res = await this.prodgroupModel.findByIdAndUpdate(id, updateProdgroupDto, {useFindAndModify: false});
    if (updateProdgroupDto.hasOwnProperty('members')) {
      let oldMb:any[] = Res.members.slice(),
          newMb:any[] = updateProdgroupDto.members.slice(),
          arrQuery:any[] = [];
      newMb.forEach(el => {
        if (oldMb.includes(el)) {
          const index: number = oldMb.indexOf(el);
          if (index !== -1) {
            oldMb.splice(index, 1);
            newMb.splice(index, 1);
          }
        }
      });
      if (oldMb.length) {arrQuery.push(
          {updateMany: {
              filter: {_id:{$in:oldMb}},
              update:{$pull: {groups: ObjectId(id)}}
            }}
      )}
      if (newMb.length) {arrQuery.push(
          {updateMany: {
              filter: {_id:{$in:newMb}},
              update:{$push: {groups: ObjectId(id)}}
            }}
      )}
      if (arrQuery.length){
        await this.productModel.bulkWrite(arrQuery);
        return this.prodgroupModel.findById(id).populate("members",['title']).exec()
      }
    } else return this.prodgroupModel.findById(id).populate("members",['title']).exec()

  }

  async remove(id: string): Promise<ProdGroup> {
    const remove = await this.prodgroupModel.findByIdAndRemove(id, {useFindAndModify: false});
    if (remove.members && remove.members.length){
      await this.productModel.updateMany(
          {_id:{$in:remove.members}},
          {$pull: {group: ObjectId(id)}});
      return remove
    }
    return remove
  }
}
