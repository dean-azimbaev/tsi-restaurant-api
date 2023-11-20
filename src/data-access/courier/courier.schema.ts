import { EntitySchema } from 'typeorm';

//@TODO: move to domain layer
class Phone {
  private _value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create = (value: string) => new Phone(value);

  get value(): string {
    return this._value;
  }

  private set value(value: string) {
    //@TODO: add assertion checks
    this._value = value;
  }
}

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
