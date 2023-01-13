import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Item } from "src/items/entities/item.entity";
import { Player } from "src/player/entities/player.entity";

export class CreateAccountDto {
    
    @IsNotEmpty()
    @Type(() => Player)
    players: Player[];

    @Type(() => Item)
    items: Item[];

}
