import { Patch, applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { UpdateDishDTO } from '../dto';

export const UpdateDish = () =>
  applyDecorators(
    Patch(':id'),
    ApiOperation({
      summary: 'Обновление информации о блюде',
      description: 'Обновление информации о блюде по его идентификатору',
    }),
    ApiParam({
      description: 'Идентификатор блюда',
      name: 'id',
      type: 'string',
    }),
    ApiBody({ type: UpdateDishDTO }),
    ApiUnauthorizedResponse({ description: 'Не авторизован' }),
    ApiForbiddenResponse({ description: 'Нет доступа' }),
    ApiNotFoundResponse({ description: 'Блюдо не найдено' }),
    ApiInternalServerErrorResponse({ description: 'Ошибка сервера' }),
  );
