import { Get, applyDecorators } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { CategoryDTO } from '../dto';

export const FindCategory = () =>
  applyDecorators(
    Get(':id'),
    ApiOperation({
      description: 'Получение категории по id',
    }),
    ApiParam({
      description: 'Идентификатор блюда',
      name: 'id',
      type: 'string',
    }),
    ApiOkResponse({
      type: CategoryDTO,
    }),
    ApiNotFoundResponse({
      description: 'Блюдо не найдено',
    }),
  );
