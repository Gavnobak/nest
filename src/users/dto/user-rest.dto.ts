import {IsArray, IsOptional, IsString} from "class-validator";

export class UserRestDto {

    readonly id: number

    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsOptional()
    @IsArray()
    readonly groups: any[]

    @IsOptional()
    @IsArray()
    readonly friends: any[]
}