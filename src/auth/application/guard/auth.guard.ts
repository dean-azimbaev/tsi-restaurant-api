import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

import { DomainRegistry, UserRole } from 'src/auth/domain';
import { ROLES_KEY } from '../decorator';

//@TODO: refactor god guard
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly registry: DomainRegistry,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const jwt = this.extractTokenFromRequest(request);

    if (!jwt) {
      throw new UnauthorizedException('No JWT provided');
    }

    const token = await this.registry.tokenService.verify(jwt);

    if (token.isExpired) {
      throw new UnauthorizedException('JWT is expired');
    }

    const roles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!roles) {
      return true;
    }

    const userRoles = await this.registry.userRepository.rolesOf(token.sub);

    return roles.some((role) => userRoles.includes(role));
  }

  extractTokenFromRequest(request: Request): string {
    const jwt = request.headers['authorization']?.split(' ')[1];
    return jwt;
  }
}
