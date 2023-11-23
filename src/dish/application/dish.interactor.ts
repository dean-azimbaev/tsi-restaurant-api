import { Injectable, NotFoundException } from '@nestjs/common';

import { DomainRegistry } from '../domain/registry';
import { DishDTO, CreateDishDTO, UpdateDishDTO } from './dto';

@Injectable()
export class DishInteractor {
  private get repository() {
    return this.registry.dishRepository;
  }

  constructor(private registry: DomainRegistry) {}

  find = (): Promise<DishDTO[]> => this.repository.find();

  findOne = (id: string): Promise<DishDTO> => this.repository.findOne(id);

  delete = (id: string) => this.repository.delete(id);

  create = (dto: CreateDishDTO): Promise<void> => {
    const dish = this.repository.create(dto as DishDTO);
    return this.repository.save(dish);
  };

  update = async (id: string, dto: UpdateDishDTO): Promise<void> => {
    const dish = await this.repository.findOne(id);

    if (!dish) {
      throw new NotFoundException('Dish not found');
    }
    //@TODO: refactor
    return this.repository.save({ ...dish, ...dto });
  };
}
