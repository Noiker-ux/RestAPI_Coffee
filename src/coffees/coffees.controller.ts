import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import express from 'express';

@Controller('coffees')
export class CoffeesController {
  @Get('/all')
  findAll(@Res() responce: express.Response) {
    responce.status(200).send('this call all coffees');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post('/create')
  @HttpCode(HttpStatus.GONE)
  create(@Body() body: { name: string; price: string }) {
    return body;
  }
}
