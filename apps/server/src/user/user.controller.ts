import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoinDto } from './dtos/join.dto';
import { UserService } from './user.service';
import { UserEntity } from 'src/entities/user.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  public constructor(
    private readonly userService: UserService
  ) {}

  @ApiOperation({ summary: 'Join to server' })
  @Post('join')
  public async join(
    @Body() user: JoinDto
  ): Promise<UserEntity> {
    return await this.userService.join(user);
  }

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  public async getAll(): Promise<UserEntity[]> {
    return await this.userService.getAll();
  }
}
