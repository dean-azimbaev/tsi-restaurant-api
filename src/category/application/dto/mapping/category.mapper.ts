import { Category as Domain } from '../../../domain/model';
import { CategoryDTO as DTO } from '../category.dto';

export class CategoryMapper {
  static toDTO = ({ parentId, id, icon, description, name }: Domain): DTO => {
    return {
      parent_id: parentId,
      id,
      icon,
      description,
      name,
    };
  };

  static toDomain = ({
    parent_id,
    name,
    id,
    description,
    icon,
  }: DTO): Domain => {
    return {
      parentId: parent_id,
      name,
      id,
      description,
      icon,
    };
  };
}
