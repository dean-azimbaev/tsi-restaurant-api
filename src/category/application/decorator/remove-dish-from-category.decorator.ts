import { Delete, applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Roles, User } from 'src/auth';
import { UserRole } from 'src/auth/domain';

export const RemoveDishFromCategory = () =>
  applyDecorators(
    Delete(':id/dishes/:dish_id'),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: 'Убрать блюдо из категории' }),
    ApiParam({
      name: 'id',
      type: 'string',
      description: 'Идентификатор категории',
    }),
    ApiParam({
      name: 'dish_id',
      type: 'string',
      description: 'Идентификатор блюда, которое нужно убрать из категории',
    }),
    ApiUnauthorizedResponse({ description: 'Необходима авторизация' }),
    ApiForbiddenResponse({ description: 'Недостаточно прав' }),
    ApiNotFoundResponse({ description: 'Категория или блюдо не найдены' }),
    ApiInternalServerErrorResponse({ description: 'Ошибка сервера' }),
  );
