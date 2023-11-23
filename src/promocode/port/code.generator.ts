import { nanoid } from 'nanoid';

import { CodeGeneratorService as IService } from '../domain';

export class CodeGeneratorService implements IService {
  generate = async (): Promise<string> => nanoid(8);
}
