import { Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Achievement, AchievementDocument } from './entities/achievement.entity';

@Injectable()
export class AchievementService {

  constructor(@InjectModel('Achievement') private achievementModel: Model<AchievementDocument>){
  }

  async create(createAchievementDto: CreateAchievementDto): Promise<Achievement> {
    return await new this.achievementModel(createAchievementDto).save();
  }

  async findAll(): Promise<Achievement[]> {
    return this.achievementModel.find({})
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} achievement`;
  // }

  // update(id: number, updateAchievementDto: UpdateAchievementDto) {
  //   return `This action updates a #${id} achievement`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} achievement`;
  // }
}
