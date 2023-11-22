import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ConfigService } from 'src/config';
import { TokenService as ITokenService, User, UserRepository } from '../domain';
import { Token } from '../domain/model/token';

@Injectable()
export class TokenService implements ITokenService {
  constructor(
    private jwt: JwtService,
    private config: ConfigService,
    private users: UserRepository,
  ) {}

  async sign(user: User): Promise<[string, string]> {
    const access = await this._sign(user, 'access');
    const refresh = await this._sign(user, 'refresh');

    return [access, refresh];
  }

  private async _sign(
    { id }: User,
    type: 'refresh' | 'access',
  ): Promise<string> {
    //Refresh tokens lives twice as long as access tokens
    const exp =
      type == 'access'
        ? this.config.jwt.expiresIn
        : this.config.jwt.expiresIn * 2;

    const roles = await this.users.rolesOf(id);

    return this.jwt.signAsync({
      sub: id,
      type,
      roles,
      expires_in: exp,
      issued_at: Date.now(),
    });
  }

  async refresh(jwt: string): Promise<string> {
    const token = await this.verify(jwt);

    if (token.type !== 'refresh') {
      throw new Error('Invalid token type');
    }

    const user = await this.users.findById(token.sub);

    if (!user) {
      throw new Error('User not found');
    }

    return this._sign(user, 'access');
  }

  async verify(jwt: string): Promise<Token> {
    const token = await this.jwt.verifyAsync<Token>(jwt);

    if (token.type !== 'access' && token.type !== 'refresh') {
      throw new Error('Invalid token type');
    }

    return token;
  }
}
