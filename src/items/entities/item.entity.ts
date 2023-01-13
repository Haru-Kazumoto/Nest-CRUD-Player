import mongoose, { Document } from "mongoose"
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Player } from "src/player/entities/player.entity";
import { Type } from "class-transformer";

export type ItemDocument = Item & Document

@Schema()
export class Item{

    // @Prop({type: mongoose.Schema.Types.ObjectId})
    // _id: string;

    @Prop()
    weapon: string;

    @Prop()
    shield: string;

    @Prop()
    levelShield: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);