import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import mongoose, { Document } from "mongoose";
import { Item } from "src/items/entities/item.entity";
import { Player } from "src/player/entities/player.entity";

export type AccountDocument = Account & Document;

@Schema()
export class Account {

    @Prop({
        default: Math.random() * 10,
        type: Number
    })
    idAccount: Math

    @Prop([{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Player'
    }])
    @Type(() => Player)
    player: Player[];

    @Prop([{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }])
    items: Item[];

    @Prop({default: Date.now()})
    dateJoin: Date
}

export const AccountSchema = SchemaFactory.createForClass(Account);
