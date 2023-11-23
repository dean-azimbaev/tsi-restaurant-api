import { Get, applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Roles } from 'src/auth/application';
import { UserRole } from 'src/auth/domain';
import { DishDTO } from '../dto';

export const FindDishes = () =>
  applyDecorators(
    Get(),
    Roles(UserRole.ADMIN),
    ApiOperation({
      summary: 'Получение списка блюд',
      description: 'Получение всего списка блюд',
    }),
    ApiOkResponse({ type: [DishDTO] }),
    ApiUnauthorizedResponse({ description: 'Не авторизован' }),
    ApiForbiddenResponse({ description: 'Нет доступа' }),
    ApiInternalServerErrorResponse({ description: 'Ошибка сервера' }),
  );
