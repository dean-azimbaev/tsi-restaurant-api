import { Body, Param, ParseUUIDPipe } from '@nestjs/common';

import {
  Dish,
  FindDish,
  FindDishes,
  CreateDish,
  CreateDishDTO,
  UpdateDish,
  DeleteDish,
  UpdateDishDTO,
  DishInteractor,
} from './application';

@Dish()
export class DishController {
  constructor(private readonly interactor: DishInteractor) {}

  @FindDishes()
  async findDishes() {
    return this.interactor.find();
  }

  @FindDish()
  async findDish(@Param('id', ParseUUIDPipe) id: string) {
    return this.interactor.findOne(id);
  }

  @CreateDish()
  async createDish(@Body() create: CreateDishDTO) {
    return this.interactor.create(create);
  }

  @UpdateDish()
  async updateDish(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() update: UpdateDishDTO) {
    return this.interactor.update(id, update)
  }

  @DeleteDish()
  async deleteDish() {
    return 'This action removes a menu';
  }
}
