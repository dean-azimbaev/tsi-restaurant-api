import { Get, applyDecorators } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { DishDTO } from '../dto';

export const FindDish = () =>
  applyDecorators(
    Get(':id'),
    ApiOperation({
      description: 'Получение блюда по id',
    }),
    ApiParam({
      description: 'Идентификатор блюда',
      name: 'id',
      type: 'string',
    }),
    ApiOkResponse({
      type: DishDTO,
    }),
    ApiNotFoundResponse({
      description: 'Блюдо не найдено',
    }),
  );
