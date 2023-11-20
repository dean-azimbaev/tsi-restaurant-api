import { Module } from '@nestjs/common';

import { ConfigService, ConfigurationModule } from './config';
import { DishModule } from './dish';
import { CategoryModule } from './category';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigurationModule,
    DishModule,
    CategoryModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigService],
      useFactory: ({ database }: ConfigService) => database
    }),
  ],
})
export class AppModule {}
