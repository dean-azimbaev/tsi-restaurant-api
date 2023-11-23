import { EntitySchema } from 'typeorm';

export class CategoryDish {
  readonly categoryId: string;
  readonly dishId: string;
}

export const CategoryDishesSchema = new EntitySchema<CategoryDish>({
  tableName: 'category_utility',
  target: CategoryDish,
  name: 'CategoryUtilities',
  columns: {
    categoryId: {
      name: 'category_id',
      type: 'uuid',
      primary: true,
    },
    dishId: {
      type: 'uuid',
      name: 'dish_id',
      primary: true,
    },
  },
});
