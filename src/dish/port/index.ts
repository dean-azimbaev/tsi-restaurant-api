import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { DishRepository } from './dish.repository';
import { DISH_REPOSITORY } from '../domain/di-tokens';

export const Ports: Provider[] = [
  {
    provide: DISH_REPOSITORY,
    inject: [DataSource],
    useFactory: (ds: DataSource) => new DishRepository(ds),
  },
];
