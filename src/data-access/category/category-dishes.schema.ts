import { EntitySchema } from 'typeorm';

export class CategoryDish {
  readonly categoryId: string;
  readonly dishId: string;
}

export const CategoryDishesSchema = new EntitySchema<CategoryDish>({
  tableName: 'category_dishes',
  target: CategoryDish,
  name: 'CategoryDish',
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
  relations: {
    dishId: {
      type: 'many-to-one',
      target: 'Dish',
      joinColumn: {
        name: 'dish_id',
      },  
    },
  },
});
