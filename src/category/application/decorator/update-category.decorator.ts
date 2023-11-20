import { Patch, applyDecorators } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { UpdateCategoryDTO } from '../dto';

export const UpdateCategory = () =>
  applyDecorators(Patch(':id'), ApiBody({ type: UpdateCategoryDTO }));
