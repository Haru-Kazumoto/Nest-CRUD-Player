import { IsNotEmpty } from "class-validator";

export class CreateAchievementDto {
    @IsNotEmpty()
    reward: string
}
