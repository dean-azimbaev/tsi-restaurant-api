import { Delete, applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Roles } from 'src/auth';
import { UserRole } from 'src/auth/domain';

export const DeleteCategory = () =>
  applyDecorators(
    Delete(':id'),
    ApiOperation({ summary: 'Удалить категорию' }),
    ApiParam({
      description: 'Идентификатор категории',
      name: 'id',
      type: 'string',
    }),
    Roles(UserRole.ADMIN),
    ApiUnauthorizedResponse({ description: 'Необходима авторизация' }),
    ApiForbiddenResponse({ description: 'Недостаточно прав' }),
    ApiNotFoundResponse({ description: 'Категория не найдена' }),
    ApiInternalServerErrorResponse({ description: 'Ошибка сервера' }),
  );
