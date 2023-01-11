import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Item } from "src/items/entities/item.entity";
export class PlayerDto {
    
    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    level: number;

    bio: string;

    @Type(() => Item)
    items: Item[];
}
