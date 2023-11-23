import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import { CATEGROY_REPOSITORY } from './di-tokens';
import { CategoryRepository } from './model';

@Injectable()
export class DomainRegistry {
  constructor(private readonly moduleRef: ModuleRef) {}

  get categoryRepository(): CategoryRepository {
    return this.moduleRef.get<CategoryRepository>(CATEGROY_REPOSITORY);
  }
}
