import { EntitySchema } from 'typeorm';

import { Dish } from 'src/dish';

export const DishSchema = new EntitySchema<Dish>({
  name: 'Dish',
  tableName: 'dish',
  target: Dish,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    name: {
      type: 'varchar',
    },
    description: {
      type: 'varchar',
      nullable: true,
      default: '',
    },
    price: {
      type: 'int',
    },
    image: {
      type: 'varchar',
      nullable: true,
    },
  },
});
