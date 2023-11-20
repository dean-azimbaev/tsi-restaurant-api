import { Patch, applyDecorators } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { UpdateDishDTO } from '../dto';

export const UpdateDish = () =>
  applyDecorators(Patch(':id'), ApiBody({ type: UpdateDishDTO }));
