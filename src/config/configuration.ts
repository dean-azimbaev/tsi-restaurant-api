import { registerAs } from '@nestjs/config';

import { swaggerConfig } from './swagger';
import { dbConfig } from './database';
import { jwtConfig } from './jwt';

export default registerAs('config', () => ({
  env: process.env.ENV,
  app: {
    http: { port: +process.env.PORT },
    host: process.env.HOST,
  },
  jwtWorkerUrl: process.env.JWT_WORKER_URL,
  cbsProxyUrl: process.env.CBS_PROXY_URL,
  ...swaggerConfig(),
  ...dbConfig(),
  ...jwtConfig(),
}));
