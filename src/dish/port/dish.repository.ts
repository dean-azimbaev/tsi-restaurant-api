import { DataSource, FindManyOptions } from 'typeorm';
import { Dish, FindOptions, DishRepository as IRepository } from '../domain';

export class DishRepository implements IRepository {
  constructor(private ds: DataSource) {}

  create(dish: Dish): Dish {
    return this.ds.manager.create(Dish, dish);
  }

  async save(dish: Dish): Promise<void> {
    await this.ds.manager.save(Dish, dish);
  }

  find(options: Partial<FindOptions>): Promise<Dish[]> {
        const opts: FindManyOptions = {};

        if (options.offset) {
          opts.skip = options.offset;
        }
        if (options.limit) {
          opts.take = options.limit;
        }

    return this.ds.manager.find(Dish, opts);
  }

  findOne(id: string): Promise<Dish> {
    return this.ds.manager.findOneOrFail(Dish, { where: { id } });
  }

  async delete(id: string): Promise<string> {
    const result = await this.ds.manager.delete(Dish, id);
    return result.affected ? id : null;
  }
}
