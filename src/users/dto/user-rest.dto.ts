import {IsArray, IsNumber, IsOptional, IsString} from "class-validator";

export class UserRestDto {

    readonly id: number

    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    readonly groups: number[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    readonly friends: number[]
}

export class UpdateUserRestDto {

    @IsOptional()
    @IsString()
    readonly firstName: string;

    @IsOptional()
    @IsString()
    readonly lastName: string;

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    readonly groups: number[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    readonly friends: number[]
}