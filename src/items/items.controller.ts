import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post('create')
  @UsePipes(new ValidationPipe)
  create(@Body() createItemDto: CreateItemDto) {
    console.log(createItemDto)
    return this.itemsService.create(createItemDto);
  }

  @Get('get')
  findAll() {
    return this.itemsService.findAll();
  }
}
