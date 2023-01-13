import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Item, ItemDocument } from "../entities/item.entity";
import { CreateItemDto } from "../dto/create-item.dto";

@Injectable()
export class ItemRepository{

    constructor(@InjectModel('Item') private itemModel: Model<ItemDocument>){}

    async createItem(createItemDto: CreateItemDto): Promise<Item>{
        let send = new this.itemModel(createItemDto);
        return send.save();
    }
    
    async findAllItem(): Promise<Item[] | null>{
        let find = this.itemModel.find({})
        return await find;
    }

}