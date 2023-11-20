import { Get, applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export const FindDishes = () =>
  applyDecorators(
    Get(),
    ApiOperation({
      description: 'Получение списка блюд',
    }),
  );
