import { Provider } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DataSource } from 'typeorm';

import { ConfigService } from 'src/config';
import {
  AUTHENTICATION_SERVICE,
  TOKEN_SERVICE,
  USER_REPOSITORY,
} from '../domain/di-tokens';
import { TokenService } from './token.service';
import { AuthenticationService } from './authentication.service';
import { UserRepostiory } from './user.repository';

export const Ports: Provider[] = [
  {
    provide: AUTHENTICATION_SERVICE,
    inject: [USER_REPOSITORY],
    useFactory: (repository: UserRepostiory) =>
      new AuthenticationService(repository),
  },
  {
    provide: TOKEN_SERVICE,
    inject: [JwtService, ConfigService, USER_REPOSITORY],
    useFactory: (
      jwt: JwtService,
      config: ConfigService,
      repository: UserRepostiory,
    ) => new TokenService(jwt, config, repository),
  },
  {
    provide: USER_REPOSITORY,
    inject: [DataSource],
    useFactory: (ds: DataSource) => {
      return new UserRepostiory(ds);
    },
  },
];
