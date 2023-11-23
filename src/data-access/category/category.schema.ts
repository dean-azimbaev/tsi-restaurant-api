import { Category } from 'src/category/domain';
import { EntitySchema } from 'typeorm';

export const CategorySchema = new EntitySchema<Category>({
  name: 'Category',
  tableName: 'category',
  target: Category,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    parentId: {
      type: 'uuid',
      name: 'parent_id',
      nullable: true,
    },
    name: {
      type: 'varchar',
    },
    description: {
      type: 'varchar',
      nullable: true,
      default: '',
    },
    icon: {
      type: 'varchar',
      nullable: true,
      default: '',
    },
  },
});
