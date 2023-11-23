import { Module } from '@nestjs/common';

import { AuthModule } from 'src/auth';
import { DomainRegistry } from './domain';
import { Ports } from './port';
import { PromocodeInteractor } from './application';
import { PromocodeController } from './promocode.controller';

@Module({
  imports: [AuthModule],
  controllers: [PromocodeController],
  providers: [PromocodeInteractor, DomainRegistry, ...Ports],
})
export class PromocodeModule {}
