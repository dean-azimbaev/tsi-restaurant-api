import { EntitySchema } from 'typeorm';

export const DishSchema = new EntitySchema({
  name: 'Dish',
  tableName: 'dish',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    name: {
      type: 'varchar',
    },
  },
});
