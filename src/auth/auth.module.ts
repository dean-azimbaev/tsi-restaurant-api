import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { ConfigService, ConfigurationModule } from 'src/config';
import { DomainRegistry } from './domain';
import { AuthGuard, AuthInteractor, Pipes } from './application';
import { AuthController } from './auth.controller';
import { Ports } from './port';

@Module({
  imports: [
    ConfigurationModule,
    JwtModule.registerAsync({
      imports: [ConfigurationModule],
      inject: [ConfigService],
      useFactory: ({ jwt: { secret } }: ConfigService) => ({ secret }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthInteractor, AuthGuard, DomainRegistry, ...Ports, ...Pipes],
  exports: [AuthGuard, DomainRegistry],
})
export class AuthModule {}
