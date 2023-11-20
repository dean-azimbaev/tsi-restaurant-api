import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class CategoryDTO {
  @ApiProperty({
    description: 'Идентификатор блюда',
    example: randomUUID(),
  })
  id: string;

  @ApiProperty({
    description: 'Айди родительской категории',
    example: randomUUID(),
  })
  parent_id: string;

  @ApiProperty({
    description: 'Название категории',
    example: 'Холодные закуски',
  })
  name: string;

  @ApiProperty({
    description: 'Описание блюда',
    example: 'Насладитесь множествов красивых и вкусных закусок',
  })
  description: string;

  @ApiProperty({
    description: 'Путь к изображению блюда',
    example: 'base64string/url',
  })
  image: string;
}

export class CreateCategoryDTO extends OmitType(CategoryDTO, ['id']) {}

export class UpdateCategoryDTO extends CreateCategoryDTO {}
