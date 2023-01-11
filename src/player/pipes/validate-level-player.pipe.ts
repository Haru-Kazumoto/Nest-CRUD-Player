import { 
  ArgumentMetadata, 
  Injectable, 
  PipeTransform, 
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { PlayerDto } from '../dto/create-player.dto';

@Injectable()
export class PlayerPipe implements PipeTransform {
  transform(value: PlayerDto, metadata: ArgumentMetadata) {

    const parseLevelToInt = parseInt(value.level.toString());

    if(isNaN(parseLevelToInt)){
      throw new HttpException(
        "Invalid data type for level properties. Expected number!",
        HttpStatus.BAD_REQUEST
      )
    };
    return {
      ...value, level: parseLevelToInt
    };
  }
}
