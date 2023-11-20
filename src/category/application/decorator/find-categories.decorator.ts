import { Get, applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export const FindCategories = () =>
  applyDecorators(
    Get(),
    ApiOperation({
      description: 'Получение списка блюд',
    }),
  );
