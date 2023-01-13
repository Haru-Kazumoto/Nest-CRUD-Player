import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Res,
  Patch, 
  Param, 
  Delete, 
  UsePipes, 
  ValidationPipe 
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayerPipe } from './pipes/validate-level-player.pipe';
import { Response } from 'express';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body(PlayerPipe) createPlayerDto: PlayerDto) {
    console.log(createPlayerDto)
    return this.playerService.createPlayer(createPlayerDto);
  }

  @Get('get')
  findAll() {
    return this.playerService.findAll();
  }

  // @Get('get/:id')
  // findOneById(@Param('id') id: string, @Res() res: Response) {
  //   const dataId = this.playerService.findOneById(id);
  //   return dataId ? 
  //   res.send(dataId) : 
  //   res.status(400).send({ msg: 'Id not found.'})
  // }

  // @Get('getbyName/:name')
  // findOneByName(@Param('name') username: string, @Res() res: Response){
  //   const dataId = this.playerService.findOneByName(username);    
  //   return dataId ? 
  //   res.send(dataId) : 
  //   res.status(400).send({ msg: 'Name not found.'})
  // }

  // @Patch('update/:id')
  // update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto, @Res() res: Response) {
  //   const dataId = this.playerService.update(id, updatePlayerDto);
  //   return dataId ? 
  //   res.send(dataId) : 
  //   res.status(400).send({ msg: 'Id not found.'})
  // }

  // @Delete('delete/:id')
  // remove(@Param('id') id: string, @Res() res: Response) {
  //   const dataId =  this.playerService.remove(id);
  //   return dataId ? 
  //   res.send(dataId) : 
  //   res.status(400).send({ msg: 'Id not found.'})
  // }
}
