import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { CategoryRepository } from './category.repository';
import { CATEGROY_REPOSITORY } from '../domain';

export const Ports: Provider[] = [
  {
    provide: CATEGROY_REPOSITORY,
    inject: [DataSource],
    useFactory: (dataSource: DataSource) => new CategoryRepository(dataSource),
  },
];
