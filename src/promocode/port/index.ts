import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { PromocodeRepository } from './promocode.repository';
import { CODE_GENERATOR, PROMOCODE_REPOSITORY } from '../domain';
import { CodeGeneratorService } from './code.generator';

export const Ports: Provider[] = [
  {
    provide: PROMOCODE_REPOSITORY,
    inject: [DataSource],
    useFactory: (ds: DataSource) => new PromocodeRepository(ds),
  },
  {
    provide: CODE_GENERATOR,
    useClass: CodeGeneratorService,
  },
];
