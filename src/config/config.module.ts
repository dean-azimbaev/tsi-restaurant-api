import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

import { Environment } from './environment';
import { ConfigService as Config } from './config.service';
import configuration from './configuration';
import { swaggerConfigSchema } from './swagger';
import { databaseConfigSchema } from './database';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        ENV: Joi.string()
          .valid(
            Environment.DEVELOPMENT,
            Environment.PRODUCTION,
          )
          .default(Environment.DEVELOPMENT),
        PORT: Joi.number().default(5000),
        ...swaggerConfigSchema,
        ...databaseConfigSchema,
      }),
    }),
  ],
  providers: [ConfigService, Config],
  exports: [ConfigService, Config],
})
export class ConfigurationModule {}
