import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Item } from "src/items/entities/item.entity";

export type PlayerDocument = Player & Document

@Schema()
export class Player {

    // @Prop({type: MongooseSchema.Types.ObjectId})
    // _id: string;

    @Prop()
    username: String;

    @Prop()
    bio: String;    

    @Prop()
    level: Number;
    
    // @Prop([
    //     {
    //         type: mongoose.Schema.Types.ObjectId, ref: 'Item'
    //     }
    // ])
    // @Type(() => Item)
    // items: Item[];

    @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Item'})
    items: string;

    @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Achievement'})
    achievements: String;
}


export const PlayerSchema = SchemaFactory.createForClass(Player)
