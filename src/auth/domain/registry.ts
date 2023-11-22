import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import {
  AUTHENTICATION_SERVICE,
  TOKEN_SERVICE,
  USER_REPOSITORY,
} from './di-tokens';
import { AuthenticationService, TokenService, UserRepository } from '../domain';

@Injectable()
export class DomainRegistry {
  constructor(private readonly moduleRef: ModuleRef) {}

  get authenticationService(): AuthenticationService {
    return this.moduleRef.get<AuthenticationService>(AUTHENTICATION_SERVICE);
  }

  get tokenService(): TokenService {
    return this.moduleRef.get<TokenService>(TOKEN_SERVICE);
  }

  get userRepository() {
    return this.moduleRef.get<UserRepository>(USER_REPOSITORY);
  }
}
