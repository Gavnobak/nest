import {IsArray, IsOptional, IsString} from "class-validator";

export class CreateProdgroupDto {
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    readonly members: string[];
}

export class UpdateProdgroupDto {
    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    readonly members: string[];
}