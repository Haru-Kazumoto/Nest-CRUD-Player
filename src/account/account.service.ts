import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from './entities/account.entity';

@Injectable()
export class AccountService {

  constructor(@InjectModel('Account') private accountModel: Model<AccountDocument>){}

  create(createAccountDto: CreateAccountDto): Promise<Account> {
    const send = new this.accountModel(createAccountDto).save();
    return send;
  }

  findAll() {
    return this.accountModel.find({});
  }
}
