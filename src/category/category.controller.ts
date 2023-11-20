import { Body } from '@nestjs/common';

import {
  Dish,
  FindCategory as FindOne,
  FindCategories as Find,
  CreateCategory as Create,
  CreateCategoryDTO,
  UpdateCategory as Update,
  DeleteCategory as Delete,
  UpdateCategoryDTO,
} from './application';

@Dish()
export class CategoryController {
  @Find()
  async find() {}

  @FindOne()
  async findOne() {}

  @Create()
  async create(@Body() create: CreateCategoryDTO) {
    return create;
  }

  @Update()
  async updateDish(@Body() update: UpdateCategoryDTO) {
    return 'This action updates a menu';
  }

  @Delete()
  async deleteDish() {
    return 'This action removes a menu';
  }
}
