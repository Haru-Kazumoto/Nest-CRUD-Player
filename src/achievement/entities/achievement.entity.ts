import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AchievementDocument = Achievement & Document

@Schema()
export class Achievement {

    @Prop()
    reward: String;

}

export const AchievementSchema = SchemaFactory.createForClass(Achievement);
