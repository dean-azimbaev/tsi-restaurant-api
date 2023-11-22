import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ConfigService } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const {
    app: { http, host },
    swagger,
    environment,
  }: ConfigService = app.get<ConfigService>(ConfigService);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle(swagger.info.title)
    .setDescription(swagger.info.description)
    .setVersion(swagger.info.version)
    .setExternalDoc('Postman Collection', `${host}/${swagger.path}-json`)
    .build()

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(swagger.path, app, document);

  await app
    .listen(http.port)
    .then(() =>
      Logger.log(`API started on http port ${http.port}, env: ${environment}`),
    );
}
bootstrap();
