import { Post, applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiOperation,
  ApiParam,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export const ApplyPromocode = () =>
  applyDecorators(
    Post(':code/apply'),
    ApiParam({
      name: 'code',
      description: 'Промокод',
      example: 'FMC42',
      type: 'string',
    }),
    ApiOperation({
      description: 'Применить промокод',
      summary: 'Применить промокод',
    }),
    ApiUnauthorizedResponse({ description: 'Пользователь не авторизован' }),
    ApiForbiddenResponse({ description: 'Промокод уже применен' }),
  );
