import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Promocode, PromocodeRepository as IRepository } from '../domain';

@Injectable()
export class PromocodeRepository implements IRepository {
  constructor(private ds: DataSource) {}

  async save(code: Promocode): Promise<void> {
    await this.ds.manager.save(code);
  }

  find(): Promise<Promocode[]> {
    return this.ds.manager.find(Promocode);
  }

  findOne(code: string): Promise<Promocode> {
    return this.ds.manager.findOne(Promocode, { where: { code } });
  }

  async create(code: string): Promise<Promocode> {
    const promocode = new Promocode(code);
    await this.save(promocode);
    return promocode;
  }
}
