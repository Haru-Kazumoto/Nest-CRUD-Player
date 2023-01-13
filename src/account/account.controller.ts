import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('account')
export class AccountController {

  constructor(private readonly accountService: AccountService) {}

  @Post('create')
  @UsePipes(new ValidationPipe)
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @Get('get')
  findAll() {
    return this.accountService.findAll();
  }
}
