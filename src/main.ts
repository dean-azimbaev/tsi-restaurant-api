import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ConfigService, Environment } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const {
    app: { http, host },
    environment,
    swagger,
  }: ConfigService = app.get<ConfigService>(ConfigService);

  app.enableCors();

  if (Environment.DEVELOPMENT === environment) {
    const config = new DocumentBuilder()
      .setTitle(swagger.info.title)
      .setDescription(swagger.info.description)
      .setVersion(swagger.info.version)
      .setExternalDoc('Postman Collection', `${host}/${swagger.path}-json`)
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup(swagger.path, app, document);
  }


  await app.startAllMicroservices().catch((e) => {
    Logger.error(
      `[app.startAllMicroservices()] WHILE STARTING APP: ${e.message}`,
    );
  });
  await app
    .listen(http.port)
    .then(() => Logger.log(`Service started on http port ${http.port}`));
}
bootstrap();
