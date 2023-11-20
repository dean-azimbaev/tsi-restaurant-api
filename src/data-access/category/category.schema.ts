import { EntitySchema } from 'typeorm';

export const CategorySchema = new EntitySchema({
  name: 'Category',
  tableName: 'category',
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
