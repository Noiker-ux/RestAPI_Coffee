import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'espresso',
      brand: 'buddy brew',
      flavors: ['vanilla', 'chocolate'],
    },
    {
      id: 2,
      name: 'latte',
      brand: 'latte word',
      flavors: ['vanilla', 'chocolate', 'milk'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((coffee) => coffee.id === +id);
  }

  create(createCoffeeDto: Coffee) {
    this.coffees.push(createCoffeeDto);
  }

  remove(id: string) {
    this.coffees = this.coffees.filter((coffee) => coffee.id !== +id);
  }

  update(id: string, updateCoffeeDto: Coffee) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
    }
  }
}
