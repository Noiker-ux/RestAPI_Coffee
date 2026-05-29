import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('/all')
  findAll() {
    return 'this call all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post('/create')
  create(@Body() body: { name: string; price: string }) {
    return body;
  }
}
