import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Res } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { Response } from 'express';

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post('create')
  @UsePipes(new ValidationPipe)
  create(@Body() createAchievementDto: CreateAchievementDto) {
    console.log(createAchievementDto);
    return this.achievementService.create(createAchievementDto);
  }

  @Get('get')
  findAll() {
    return this.achievementService.findAll();
  }
}
