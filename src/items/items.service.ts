import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './entities/item.entity';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {

  constructor(@InjectModel('Item') private modelItem: Model<ItemDocument>){}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return new this.modelItem(createItemDto).save();
  }

  async findAll(): Promise<Item[]> {
    return this.modelItem.find({});
  }
}
