import { Module } from '@nestjs/common';

import { AuthModule } from 'src/auth';
import { DishController } from './dish.controller';
import { DishInteractor } from './application';
import { DomainRegistry } from './domain';
import { Ports } from './port';

@Module({
  imports: [AuthModule],
  controllers: [DishController],
  providers: [DishInteractor, DomainRegistry, ...Ports],
})
export class DishModule {}
