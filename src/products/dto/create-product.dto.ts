import {IsArray, IsOptional, IsString} from "class-validator";

export class CreateProductDto {

    @IsString()
    readonly title: string

    @IsOptional()
    @IsArray()
    readonly groups: any[];
}