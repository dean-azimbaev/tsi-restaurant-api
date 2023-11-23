import { Get, applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { PromocodeDTO } from '../dto/promocode.dto';
import { Roles } from 'src/auth';
import { UserRole } from 'src/auth/domain';

export const FindPromocodes = () =>
  applyDecorators(
    Get(),
    Roles(UserRole.ADMIN),
    ApiOkResponse({ type: [PromocodeDTO] }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
