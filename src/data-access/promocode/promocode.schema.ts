import { EntitySchema } from 'typeorm';

import { Promocode, PromocodeStatus } from 'src/promocode/domain';
import { PromocodeStatus as StatusEnum } from 'src/promocode/domain/enum';

// Typing reasons
interface PromocodeDA {
  code: string;
  status: PromocodeStatus;
  createdAt: Date;
  activatedAt: Date;
  appliedAt: Date;
  appliedBy: string;
}

export const PromocodeSchema = new EntitySchema<PromocodeDA>({
  name: 'Promocode',
  tableName: 'promocode',
  target: Promocode, // But when repository reads promocode from db, then it transforms to Domain object
  columns: {
    code: {
      type: 'varchar',
      primary: true,
    },
    status: {
      type: 'enum',
      enum: StatusEnum,
      default: StatusEnum.INACTIVE,
      transformer: {
        from: (value: StatusEnum) => PromocodeStatus.create(value),
        to: ({ value }: PromocodeStatus) => value,
      },
    },
    appliedBy: {
      name: 'applied_by',
      type: 'uuid',
      nullable: true,
    },
    createdAt: {
      name: 'created_at',
      type: 'timestamp',
      createDate: true,
    },
    activatedAt: {
      name: 'activated_at',
      type: 'timestamp',
      nullable: true,
    },
    appliedAt: {
      name: 'applied_at',
      type: 'timestamp',
      nullable: true,
    },
  },
});
