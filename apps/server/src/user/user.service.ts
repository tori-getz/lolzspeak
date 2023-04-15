import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { JoinDto } from './dtos/join.dto';

@Injectable()
export class UserService {
  public constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ) {}

  public async join(user: JoinDto) {
    return this.userRepository.save({
      name: user.name,
    });
  }

  public async getAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }
}
