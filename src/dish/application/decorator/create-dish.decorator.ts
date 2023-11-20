import { Post, applyDecorators } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateDishDTO } from '../dto';

export const CreateDish = () =>
  applyDecorators(Post(), ApiBody({ type: CreateDishDTO }));
