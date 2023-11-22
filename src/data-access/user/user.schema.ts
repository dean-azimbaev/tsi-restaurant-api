import { EntitySchema } from 'typeorm';

import { Phone, UserRole } from 'src/auth/domain';

export class UserDA {
  readonly id: string;
  readonly phone: Phone;
  readonly password: string;
  readonly roles: UserRole[];
}

export const UserSchema = new EntitySchema<UserDA>({
  tableName: 'user',
  name: 'User',
  target: UserDA,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    phone: {
      name: 'phone',
      type: 'varchar',
      unique: true,
      transformer: {
        from: (value: string) => new Phone(value),
        to: ({ value }: Phone) => value,
      },
    },
    password: {
      type: 'varchar',
    },
    roles: {
      type: 'varchar',
      array: true,
      enum: UserRole,
    },
  },
});
