import { Delete, applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export const DeleteCategory = () =>
  applyDecorators(
    Delete(':id'),
    ApiOperation({ description: 'Удаление блюда по id' }),
  );
