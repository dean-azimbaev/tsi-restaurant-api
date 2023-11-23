import { ModuleRef } from '@nestjs/core';
import { Injectable } from '@nestjs/common';

import { DishRepository } from './model/dish.repository';
import { DISH_REPOSITORY } from './di-tokens';

@Injectable()
export class DomainRegistry {
  constructor(private moduleRef: ModuleRef) {}

  get dishRepository(): DishRepository {
    return this.moduleRef.get(DISH_REPOSITORY);
  }
}
