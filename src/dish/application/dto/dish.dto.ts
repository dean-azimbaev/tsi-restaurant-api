import { ApiProperty, OmitType } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class DishDTO {
  @ApiProperty({
    description: 'Идентификатор блюда',
    example: randomUUID(),
  })
  id: string;

  @ApiProperty({
    description: 'Название блюда',
    example: 'Том ям по тайски',
  })
  name: string;

  @ApiProperty({
    description: 'Цена блюда',
    example: 420,
  })
  price: number;

  @ApiProperty({
    description: 'Описание блюда',
    example: 'Том ям по тайски сделанный на морепродуктах',
  })
  description: string;

  @ApiProperty({
    description: 'Путь к изображению блюда',
    example: 'base64string/url',
  })
  image: string;
}

export class CreateDishDTO extends OmitType(DishDTO, ['id']) {}

export class UpdateDishDTO extends CreateDishDTO {}
