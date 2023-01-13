import { Injectable } from "@nestjs/common/decorators";
import { InjectModel } from "@nestjs/mongoose";
import { PlayerDto } from "../dto/create-player.dto";
import { Player, PlayerDocument } from "../entities/player.entity";
import { Model } from "mongoose";

@Injectable()
export class PlayerRepository{

    constructor(@InjectModel(Player.name) private playerModel: Model<PlayerDocument>){}

    async create(playerDto: PlayerDto): Promise<Player>{
        let send = new this.playerModel(playerDto)
        return send.save();
    }

    async findAll(): Promise<Player[]>{
        return this.playerModel.find({}).populate('items');
    }
}
