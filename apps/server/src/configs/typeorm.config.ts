import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { UserEntity } from "src/entities/user.entity";

export const getTypeormConfig = async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
  return {
    type: 'sqlite',
    database: configService.get<string>('database.path'),
    entities: [
      UserEntity
    ],
    synchronize: true
  }
}
