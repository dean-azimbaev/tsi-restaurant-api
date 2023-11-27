import { DataSource, FindManyOptions } from 'typeorm';

import { CategoryDishesSchema } from 'src/data-access';
import {
  Category,
  FindOptions,
  CategoryRepository as IRepository,
} from '../domain';
import { Dish } from 'src/dish';

export class CategoryRepository implements IRepository {
  constructor(private ds: DataSource) {}

  create(category: Category): Category {
    return this.ds.manager.create(Category, category);
  }

  async save(category: Category): Promise<void> {
    this.ds.manager.save(category);
  }

  find(options: Partial<FindOptions> = {}): Promise<Category[]> {
    const opts: FindManyOptions = {};

    if (options.offset) {
      opts.skip = options.offset;
    }
    if (options.limit) {
      opts.take = options.limit;
    }

    return this.ds.manager.find(Category, opts);
  }

  findOne(id: string): Promise<Category> {
    return this.ds.manager.findOne(Category, { where: { id } });
  }

  delete(id: string): Promise<string> {
    return this.ds.manager
      .delete(Category, id)
      .then((result) => (result.affected ? id : null));
  }

  findCategoryDishes(categoryId: string): Promise<Dish[]> {
    return this.ds.manager
      .find(CategoryDishesSchema, {
        where: { categoryId },
        relations: ['dishId'],
      })
      .then((dishes) => dishes.map((dish) => dish.dishId as unknown as Dish));
  }

  async addDishToCategory(dishId: string, categoryId: string): Promise<void> {
    await this.ds.manager.save(CategoryDishesSchema, { dishId, categoryId });
  }

  async removeDishFromCategory(
    dishId: string,
    categoryId: string,
  ): Promise<void> {
    await this.ds.manager.delete(CategoryDishesSchema, { dishId, categoryId });
  }
}
