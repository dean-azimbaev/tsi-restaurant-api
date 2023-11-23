import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth';

import { CategoryInteractor } from './application';
import { CategoryController } from './category.controller';
import { Ports } from './port';
import { DomainRegistry } from './domain';

@Module({
  imports: [AuthModule],
  controllers: [CategoryController],
  providers: [...Ports, DomainRegistry, CategoryInteractor],
})
export class CategoryModule {}
