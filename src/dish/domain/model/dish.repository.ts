import { Dish } from './dish';

export interface FindOptions {
  limit: number;
  offset: number;
}

export interface DishRepository {
  // Only Creates domain object, but not in the database
  create(dish: Dish): Dish;
  save(dish: Dish): Promise<void>;
  find(options?: Partial<FindOptions>): Promise<Dish[]>;
  findOne(id: string): Promise<Dish>;
  delete(id: string): Promise<string>;
}
