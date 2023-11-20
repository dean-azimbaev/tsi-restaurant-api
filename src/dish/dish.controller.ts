import { Body, Delete, Patch, Post } from '@nestjs/common';

import {
  Dish,
  FindDish,
  FindDishes,
  CreateDish,
  CreateDishDTO,
  UpdateDish,
  DeleteDish,
  UpdateDishDTO,
} from './application';

@Dish()
export class DishController {
  @FindDishes()
  async findDishes() {}

  @FindDish()
  async findDish() {}

  @CreateDish()
  async createDish(@Body() create: CreateDishDTO) {
    return create;
  }

  @UpdateDish()
  async updateDish(@Body() update: UpdateDishDTO) {
    return 'This action updates a menu';
  }

  @DeleteDish()
  async deleteDish() {
    return 'This action removes a menu';
  }
}
