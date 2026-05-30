import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get('/all')
  findAll(@Query() paginationQuery: { limit: number; offset: number }) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post('/create')
  create(@Body() body: Coffee) {
    return this.coffeesService.create(body);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Coffee) {
    return this.coffeesService.update(id, body);
  }
}
