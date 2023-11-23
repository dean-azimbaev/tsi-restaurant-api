import { ModuleRef } from '@nestjs/core';
import { Injectable } from '@nestjs/common';

import { PromocodeRepository, CodeGeneratorService } from './model';
import { CODE_GENERATOR, PROMOCODE_REPOSITORY } from './di-tokens';

@Injectable()
export class DomainRegistry {
  constructor(private moduleRef: ModuleRef) {}

  get promocodeRepository(): PromocodeRepository {
    return this.moduleRef.get(PROMOCODE_REPOSITORY);
  }

  get codeGeneratorService(): CodeGeneratorService {
    return this.moduleRef.get(CODE_GENERATOR);
  }
}
