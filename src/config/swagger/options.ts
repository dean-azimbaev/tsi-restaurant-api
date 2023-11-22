import { SwaggerCustomOptions } from '@nestjs/swagger';

export type SwaggerOptions = {
  path: string;
  info: any;
  security: {
    name: string;
    scheme: any;
  };
  options: Pick<SwaggerCustomOptions, 'swaggerOptions'>;
};
