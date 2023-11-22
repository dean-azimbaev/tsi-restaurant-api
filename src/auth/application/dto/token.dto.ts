import { PickType } from '@nestjs/swagger';

import { SignedInDTO } from './signedin.dto';

export class TokenDTO extends PickType(SignedInDTO, ['access_token']) {}
