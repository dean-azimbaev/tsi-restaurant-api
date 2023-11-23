import { EntitySchema } from 'typeorm';

import { Phone } from 'src/auth/domain';

export class CourierDA {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: Phone;
}

export const Courier = new EntitySchema<CourierDA>({
  name: 'Courier',
  tableName: 'courier',
  columns: {
    id: {
      primary: true,
      generated: 'uuid',
      type: 'uuid',
    },
    firstName: {
      type: 'varchar',
      name: 'first_name',
    },
    lastName: {
      type: 'varchar',
      name: 'last_name',
    },
    middleName: {
      type: 'varchar',
      name: 'middle_name',
      nullable: true,
      default: '',
    },
    phone: {
      type: 'varchar',
      unique: true,
      transformer: {
        from: (value: string) => Phone.create(value),
        to: ({ value }: Phone) => value,
      },
    },
  },
});
