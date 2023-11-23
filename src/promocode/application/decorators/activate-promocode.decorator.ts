import { Post, applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Roles } from 'src/auth';
import { UserRole } from 'src/auth/domain';

export const ActivatePromocode = () =>
  applyDecorators(
    Post(':code/activate'),
    Roles(UserRole.ADMIN),
    ApiOperation({
      summary: 'Активация промокода',
      description: 'Активация промокода',
    }),
    ApiCreatedResponse({
      description: 'Успешная активация промокода',
    }),
    ApiBadRequestResponse({
      description: 'Промокод уже активирован',
    }),
    ApiUnauthorizedResponse({}),
  );
