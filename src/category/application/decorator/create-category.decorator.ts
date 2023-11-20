import { Post, applyDecorators } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateCategoryDTO } from '../dto';

export const CreateCategory = () =>
  applyDecorators(Post(), ApiBody({ type: CreateCategoryDTO }));
