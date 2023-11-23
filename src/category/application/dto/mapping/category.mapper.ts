import { Category as Domain } from '../../../domain/model';
import { CategoryDTO as DTO } from '../category.dto';

export class CategoryMapper {
  static toDTO = ({}: Domain): DTO => {
    return new DTO();
  };

  static toDomain = ({}: DTO): Domain => {
    return new Domain();
  };
}
