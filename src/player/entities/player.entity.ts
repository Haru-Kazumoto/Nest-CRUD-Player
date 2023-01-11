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

    /**
     * TODO: create relationship schema
     * items:
     */
}

export const PlayerSchema = SchemaFactory.createForClass(Player)
