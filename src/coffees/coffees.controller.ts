import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('/all')
  findAll() {
    return 'this call all coffees';
  }
}
