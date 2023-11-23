import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DishModule } from './dish';
import { CategoryModule } from './category';
import { AuthModule } from './auth';
import { AdminModule } from './admin';
import { PromocodeModule } from './promocode';
import { ConfigService, ConfigurationModule } from './config';

@Module({
  imports: [
    AdminModule,
    AuthModule,
    DishModule,
    CategoryModule,
    PromocodeModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigService],
      useFactory: ({ database }: ConfigService) => database,
    }),
  ],
})
export class AppModule {}
