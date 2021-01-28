import {IsArray, IsNumber, IsOptional, IsString} from "class-validator";

export class GroupRestDto {

    readonly id: number

    @IsString()
    readonly name: string;

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    readonly members: number[]
}

export class UpdateGroupRestDto {

    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    readonly members: number[]
}