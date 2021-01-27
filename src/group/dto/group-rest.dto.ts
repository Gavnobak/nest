import {IsArray, IsOptional, IsString} from "class-validator";

export class GroupRestDto {

    readonly id: number

    @IsString()
    readonly name: string;

    @IsOptional()
    @IsArray()
    readonly friends: any[]
}