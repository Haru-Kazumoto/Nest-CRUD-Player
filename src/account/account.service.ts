import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from './entities/account.entity';

@Injectable()
export class AccountService {

  constructor(@InjectModel('Account') private accountModel: Model<AccountDocument>){}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const send = new this.accountModel(createAccountDto);
    return send.save();
  }

  async findAll(): Promise<Account[]> {
    return await this.accountModel.find({})
    .populate('players')
    .populate('items')
    .populate('achievements');
  }
  
}
