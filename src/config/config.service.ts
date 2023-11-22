import { Injectable } from '@nestjs/common';
import { ConfigService as Config } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { SwaggerOptions } from './swagger';
import { AppOptions } from './app.options';
import { Environment } from './environment';
import { JWTOptions } from './jwt';

@Injectable()
export class ConfigService {
  constructor(private config: Config) {}

  get environment(): Environment {
    return this.config.get<Environment>('config.env');
  }

  get app(): AppOptions {
    return this.config.get<AppOptions>('config.app');
  }

  get swagger(): SwaggerOptions {
    return this.config.get('config.swagger');
  }

  get database(): TypeOrmModuleOptions {
    return this.config.get('config.database.pg');
  }

  get jwt(): JWTOptions {
    return this.config.get('config.jwt');
  }
}
