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
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('/all')
  findAll(@Query() paginationQuery: { limit: number; offset: number }) {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit ${limit} and offset ${offset}`;
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
