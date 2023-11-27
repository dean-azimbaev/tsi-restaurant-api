import { Dish } from 'src/dish';
import { Category } from './category';

export interface FindOptions {
  limit: number;
  offset: number;
}

export interface CategoryRepository {
  // Only Creates domain object, but not in the database
  create(category: Omit<Category, 'id'>): Category;
  save(category: Category): Promise<void>;
  find(options?: Partial<FindOptions>): Promise<Category[]>;
  findOne(id: string): Promise<Category>;
  delete(id: string): Promise<string>;

  findCategoryDishes(categoryId: string): Promise<Dish[]>;
  addDishToCategory(dishId: string, categoryId: string): Promise<void>;
  removeDishFromCategory(dishId: string, categoryId: string): Promise<void>;
}
