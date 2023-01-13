import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item, ItemSchema } from '../items/entities/item.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemRepository } from './repository/item.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Item',
        schema: ItemSchema
      }
    ])
  ],
  controllers: [ItemsController],
  providers: [ItemsService, ItemRepository]
})
export class ItemsModule {}
