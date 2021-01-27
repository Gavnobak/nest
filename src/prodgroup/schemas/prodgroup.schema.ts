import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, Types} from 'mongoose'
import {Product} from "../../products/schemas/product.schema";

export type ProductGroup = ProdGroup & Document

@Schema()
export class ProdGroup {
    @Prop()
    title: string

    @Prop({type: [{type: Types.ObjectId, ref: () => Product }]})
    members: Product[] & string[];
}

export const ProdGroupSchema = SchemaFactory.createForClass(ProdGroup)