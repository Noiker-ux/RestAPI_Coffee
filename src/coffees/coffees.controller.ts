import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import express from 'express';

@Controller('coffees')
export class CoffeesController {
  @Get('/all')
  findAll(@Res() responce: express.Response) {
    responce.status(200).send('this call all coffees');
    responce.status(404).send('ups');
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

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: { name: string; price: number },
  ) {
    return `This action updates #${id} coffee with body ${JSON.stringify(body)}`;
  }
}
