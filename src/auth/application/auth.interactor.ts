import { ForbiddenException, Injectable } from '@nestjs/common';

import { SignedInDTO, TokenDTO } from './dto';
import { DomainRegistry, Phone } from '../domain';

@Injectable()
export class AuthInteractor {
  constructor(private registry: DomainRegistry) {}

  sigIn = async (phone: Phone, password: string): Promise<SignedInDTO> => {
    const user = await this.registry.authenticationService.authenticate(
      phone,
      password,
    );

    if (!user) {
      throw new ForbiddenException();
    }

    const [access_token, refresh_token] =
      await this.registry.tokenService.sign(user);

    return {
      access_token,
      refresh_token,
    };
  };

  refresh = async (refresh: string): Promise<TokenDTO> => {
    const access_token = await this.registry.tokenService.refresh(refresh);

    return {
      access_token,
    };
  };
}
