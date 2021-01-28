import {IsArray, IsOptional, IsString} from "class-validator";

export class CreateProductDto {
    @IsString()
    readonly title: string

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    readonly groups: string[];
}

export class UpdateProductDto {
    @IsOptional()
    @IsString()
    readonly title: string

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    readonly groups: string[];
}