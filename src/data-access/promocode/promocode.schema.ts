import { EntitySchema } from 'typeorm';

//@TODO: implement domain object
class Promocode {
  constructor() {}
}

//@TODO: implement data access object
export class PromocodeDA {}

export const PromocodeSchema = new EntitySchema<PromocodeDA>({
  name: 'Promocode',
  tableName: 'promocode',
  target: PromocodeDA,
  columns: {
    code: {
      type: 'varchar',
      primary: true,
    },
  },
});
