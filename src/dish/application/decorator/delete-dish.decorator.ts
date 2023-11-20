import { Delete, applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export const DeleteDish = () =>
  applyDecorators(
    Delete(':id'),
    ApiOperation({ description: 'Удаление блюда по id' }),
  );
