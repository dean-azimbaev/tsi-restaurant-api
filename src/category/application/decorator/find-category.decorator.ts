import { Get, applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CategoryDTO } from '../dto';

export const FindCategory = () =>
  applyDecorators(
    Get(':id'),
    ApiOperation({
      summary: 'Получение категории по id',
    }),
    ApiParam({
      description: 'Идентификатор блюда',
      name: 'id',
      type: 'string',
    }),
    ApiOkResponse({
      type: CategoryDTO,
    }),
    ApiUnauthorizedResponse({
      description: 'Необходима авторизация',
    }),
    ApiNotFoundResponse({
      description: 'Блюдо не найдено',
    }),
    ApiInternalServerErrorResponse({ description: 'Ошибка сервера' }),
  );
