import { Delete, applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export const DeleteDish = () =>
  applyDecorators(
    Delete(':id'),
    ApiOperation({
      summary: 'Удаление блюда',
      description:
        'Полное удаление блюда по идентификатору без его восстановления',
    }),
    ApiParam({
      type: 'string',
      name: 'id',
      description: 'Идентификатор блюда',
    }),
    ApiUnauthorizedResponse({ description: 'Не авторизован' }),
    ApiForbiddenResponse({ description: 'Нет доступа' }),
    ApiNotFoundResponse({ description: 'Блюдо не найдено' }),
    ApiInternalServerErrorResponse({ description: 'Ошибка сервера' }),
  );
