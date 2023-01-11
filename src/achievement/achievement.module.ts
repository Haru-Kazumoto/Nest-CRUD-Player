import { Module } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { AchievementController } from './achievement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AchievementSchema } from './entities/achievement.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Achievement',
      schema: AchievementSchema
    }])
  ],
  controllers: [AchievementController],
  providers: [AchievementService]
})
export class AchievementModule {}
