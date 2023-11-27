import { Body, Param, ParseUUIDPipe } from '@nestjs/common';

import {
  Category,
  FindCategory as FindOne,
  FindCategories as Find,
  CreateCategory as Create,
  CreateCategoryDTO,
  UpdateCategory as Update,
  DeleteCategory as Delete,
  UpdateCategoryDTO,
  AddDishToCategory as AddDish,
  RemoveDishFromCategory as RemoveDish,
  CategoryInteractor,
  FindCategoryDishes,
} from './application';

@Category()
export class CategoryController {
  constructor(private readonly interactor: CategoryInteractor) {}

  @Find()
  async find() {
    return this.interactor.find();
  }

  @FindOne()
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.interactor.findOne(id);
  }

  @Create()
  async create(@Body() create: CreateCategoryDTO) {
    return this.interactor.create(create);
  }

  @Update()
  async update(
    @Body() update: UpdateCategoryDTO,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.interactor.update(id, update);
  }

  @Delete()
  async deleteDish(@Param('id', ParseUUIDPipe) id: string) {
    return this.interactor.delete(id);
  }

  @FindCategoryDishes()
  async findCategoryDishes(@Param('id', ParseUUIDPipe) id: string) {
    return this.interactor.findCategoryDishes(id);
  }

  @AddDish()
  async addDish(
    @Param('id', ParseUUIDPipe) categoryId: string,
    @Param('dish_id', ParseUUIDPipe) dishId: string,
  ) {
    return this.interactor.addDish(categoryId, dishId);
  }

  @RemoveDish()
  async removeDish(
    @Param('id', ParseUUIDPipe) categoryId: string,
    @Param('dish_id', ParseUUIDPipe) dishId: string,
  ) {
    return this.interactor.removeDish(categoryId, dishId);
  }
}
