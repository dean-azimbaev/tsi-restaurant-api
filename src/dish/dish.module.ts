import { Module } from '@nestjs/common';

import { DishController } from './dish.controller';
import { AuthModule } from 'src/auth';

@Module({
  imports: [AuthModule],
  controllers: [DishController],
})
export class DishModule {}
