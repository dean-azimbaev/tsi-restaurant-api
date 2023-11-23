import { Promocode } from './promocode';

export interface PromocodeRepository {
  save(promocode: Promocode): Promise<void>;
  find(): Promise<Promocode[]>;
  findOne(code: string): Promise<Promocode>;
  /** creates promocode in Database and returns Domain object */
  create(code: string): Promise<Promocode>;
}
