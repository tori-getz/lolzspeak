import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getYamlConfiguration } from './configs/yaml.config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { getServeStaticConfig } from './configs/serve-static.config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeormConfig } from './configs/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getYamlConfiguration]
    }),
    ServeStaticModule.forRoot(getServeStaticConfig()),
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeormConfig
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
