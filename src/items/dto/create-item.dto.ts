import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Player } from "src/player/entities/player.entity";

export class CreateItemDto {
    @IsNotEmpty()
    weapon: string;
    @IsNotEmpty()
    shield: string;
    @IsNotEmpty() @IsNumber()
    levelShield: number;
}