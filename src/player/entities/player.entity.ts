import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PlayerDocument = Player & Document

@Schema()
export class Player {

    @Prop()
    username: String;

    @Prop()
    bio: String;    

    @Prop()
    level: Number;

    @Prop({default: Date.now})
    date_join: Date;

    // @Prop([
    //     {
    //         type: mongoose.Schema.Types.ObjectId, ref: 'Item'
    //     }
    // ])
    // @Type(() => Item)
    // items: Item[];
}

export const PlayerSchema = SchemaFactory.createForClass(Player)
