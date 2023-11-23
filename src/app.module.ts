import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigService, ConfigurationModule } from './config';
import { DishModule } from './dish';
import { CategoryModule } from './category';
import { AuthModule } from './auth';
import { AdminModule } from './admin';
import { PromocodeModule } from './promocode';
@Module({
  imports: [
    AdminModule,
    AuthModule,
    ConfigurationModule,
    CategoryModule,
    DishModule,
    PromocodeModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigService],
      useFactory: ({ database }: ConfigService) => database,
    }),
  ],
})
export class AppModule {}
