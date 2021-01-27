import {IsArray, IsOptional, IsString} from "class-validator";

export class CreateProdgroupDto {
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsArray()
    readonly members: any[];
}