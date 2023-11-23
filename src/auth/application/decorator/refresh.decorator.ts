import { Post, applyDecorators } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

import { RefreshDTO, TokenDTO } from '../dto';

export const Refresh = () =>
  applyDecorators(
    Post('refresh'),
    ApiBody({ type: RefreshDTO }),
    ApiOperation({
      summary: 'Обновление токена доступа',
      description:
        'У каждого токена доступа есть определенное время жизни, и когда он умирает, его можно воскресить с помощью токена обновления',
    }),
    ApiCreatedResponse({ type: TokenDTO }),
  );
