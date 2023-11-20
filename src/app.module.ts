import { Module } from '@nestjs/common';

import { ConfigurationModule } from './config';
import { DishModule } from './dish';
import { CategoryModule } from './category';

@Module({
  imports: [ConfigurationModule, DishModule, CategoryModule     ],
})
export class AppModule {}
