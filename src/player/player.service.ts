import { Injectable } from '@nestjs/common';
import { PlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Player, PlayerDocument } from './entities/player.entity';
import { HttpException, NotFoundException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { PlayerRepository } from './repository/player.repository';

@Injectable()
export class PlayerService {

  //Consctructor dependency injection
  constructor(private playerRepository: PlayerRepository){}

  //Create new data player
  createPlayer(createPlayerDto: PlayerDto): Promise<Player>{
    return this.playerRepository.create(createPlayerDto)
  }

  //Find all data player
  async findAll(): Promise<Player[]>{
    return this.playerRepository.findAll();
  }

  // //Find player by id
  // async findOneById(id: string): Promise<Player | null> {
  //   const objId = this.playerModel.findById(id)
  //   if(!objId){
  //     throw new NotFoundException(`${id} not found.`)
  //   }
  //   return objId;
  // }

  // //Find player by name 
  // async findOneByName(username: string){
  //   const objName = this.playerModel.find({username})
  //   if(!objName){
  //     throw new HttpException(`${username} not found.`, HttpStatus.BAD_REQUEST)
  //   }
  //   return objName;
  // }

  // //Update player by id
  // async update(id: string, updatePlayerDto: UpdatePlayerDto) {
  //   return this.playerModel.updateOne({id},{$set: {
  //     ...updatePlayerDto
  //   }})
  // }

  // //Remove player by id
  // async remove(id: string): Promise<Player> {
  //   const objId = await this.playerModel.findById(id);
  //   if(objId === null){
  //     throw new NotFoundException(`Id ${id} not found.`)
  //   }
  //   return this.playerModel.findOneAndRemove({id});
  // }
}