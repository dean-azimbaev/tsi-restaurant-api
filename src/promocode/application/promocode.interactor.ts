import { Injectable, NotFoundException } from '@nestjs/common';

import { DomainRegistry } from '../domain';
import { PromocodeDTO as DTO, PromocodeMapper as Mapper } from './dto';

@Injectable()
export class PromocodeInteractor {
  private get repository() {
    return this.registry.promocodeRepository;
  }

  constructor(private registry: DomainRegistry) {}

  create = async (code: string): Promise<void> => {
    await this.repository.create(code);
  };

  find = (): Promise<DTO[]> =>
    this.repository.find().then((codes) => codes.map(Mapper.toDTO));

  findOne = (code: string): Promise<DTO> =>
    this.repository.findOne(code).then(Mapper.toDTO);

  activate = async (code: string): Promise<void> => {
    const promocode = await this.repository.findOne(code);

    if (!promocode) {
      throw new NotFoundException(`Promocode ${code} not found`);
    }

    promocode.activate();

    await this.registry.promocodeRepository.save(promocode);
  };

  generate = async () => {
    const code = await this.registry.codeGeneratorService.generate();
    return this.repository.create(code);
  };

  apply = async (code: string, userId: string): Promise<void> => {
    const promocode = await this.repository.findOne(code);

    if (!promocode) {
      throw new NotFoundException(`Promocode ${code} not found`);
    }

    promocode.apply(userId);

    await this.registry.promocodeRepository.save(promocode);
  };
}
