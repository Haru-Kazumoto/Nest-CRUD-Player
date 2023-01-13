import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type AccountDocument = Account & Document;

@Schema()
export class Account {

    @Prop({
        default: Date.now()
    })
    dateJoin: Date;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Player'
    })
    players: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Achievement'
    })
    achievements: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Item'
    })
    items: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
