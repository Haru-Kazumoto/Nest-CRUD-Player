import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Achievement } from "src/achievement/entities/achievement.entity";
import { Item } from "src/items/entities/item.entity";
import { Player } from "src/player/entities/player.entity";

export class CreateAccountDto {
    
    @IsNotEmpty()
    @Type(() => Player)
    players: Player;

    @Type(() => Item)
    items: Item;

    @Type(() => Achievement)
    achievements: Achievement;

}
