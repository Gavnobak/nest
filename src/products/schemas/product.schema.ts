import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, Types} from 'mongoose';
import {ProdGroup} from "../../prodgroup/schemas/prodgroup.schema";

export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop()
    title: string

    @Prop({type: [{type: Types.ObjectId, ref: () => ProdGroup }]})
    groups: ProdGroup[] & string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product)