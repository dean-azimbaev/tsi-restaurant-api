import { Post, applyDecorators } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

import { RefreshDTO, TokenDTO } from '../dto';

export const Refresh = () =>
  applyDecorators(
    Post('refresh'),
    ApiBody({ type: RefreshDTO }),
    ApiOperation({ description: 'Обновление токена доступа' }),
    ApiCreatedResponse({ type: TokenDTO }),
  );
