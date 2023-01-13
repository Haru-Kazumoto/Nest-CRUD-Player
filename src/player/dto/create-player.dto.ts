import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Item } from "src/items/entities/item.entity";
export class PlayerDto {
    
    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    @IsNumber()
    level: number;

    bio: string;

    @Type(() => Item)
    items: Item;
}
