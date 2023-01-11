import { IsNotEmpty, Length } from "class-validator";

export class PlayerDto {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    level: number;
    @Length(10,20)
    bio: string;
}
