import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './player/player.module';
import { MONGO_CONNECTION } from './app.properties';
import { ItemsModule } from './items/items.module';
import { AchievementModule } from './achievement/achievement.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      MONGO_CONNECTION
    ),
    PlayerModule,
    ItemsModule,
    AchievementModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
