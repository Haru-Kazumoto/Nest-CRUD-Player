import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './entities/item.entity';
import { Model } from 'mongoose';
import { ItemRepository } from './repository/item.repository';

@Injectable()
export class ItemsService {

  constructor(private itemRepository: ItemRepository){}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return this.itemRepository.createItem(createItemDto);
  }

  async findAll(): Promise<Item[]> {
    return this.itemRepository.findAllItem();
  }
}
