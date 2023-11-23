import { Injectable, NotFoundException } from '@nestjs/common';

import { DomainRegistry } from '../domain/registry';
import {
  CategoryDTO as DTO,
  CreateCategoryDTO as CreateDTO,
  UpdateCategoryDTO as UpdateDTO,
  CategoryMapper as Mapper,
} from './dto';

@Injectable()
export class CategoryInteractor {
  private get repository() {
    return this.registry.categoryRepository;
  }

  constructor(private registry: DomainRegistry) {}

  find = (): Promise<DTO[]> =>
    this.repository.find().then((categories) => categories.map(Mapper.toDTO));

  findOne = async (id: string): Promise<DTO> => {
    const category = await this.repository.findOne(id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return Mapper.toDTO(category);
  };

  delete = async (id: string): Promise<void> => {
    const deleted = await this.repository.delete(id);

    if (!deleted) {
      throw new NotFoundException('Category not found');
    }
  };

  create = (dto: CreateDTO): Promise<void> => {
    const category = this.repository.create(Mapper.toDomain(dto as DTO));
    return this.repository.save(category);
  };

  update = async (id: string, dto: UpdateDTO): Promise<void> => {
    const category = await this.repository.findOne(id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }
    //@TODO: refactor
    return this.repository.save({ ...category, ...dto });
  };

  addDish = async (categoryId: string, dishId: string): Promise<void> => {
    const category = await this.repository.findOne(categoryId);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    await this.repository.addDishToCategory(dishId, categoryId);
  };

  removeDish = async (categoryId: string, dishId: string): Promise<void> => {
    const category = await this.repository.findOne(categoryId);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    await this.repository.removeDishFromCategory(dishId, categoryId);
  };
}
