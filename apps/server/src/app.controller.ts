import { Controller, Get } from '@nestjs/common';
import { IServerInfo } from './server-info.interface';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Server')
@Controller()
export class AppController {
  public constructor(
    private readonly configService: ConfigService,
  ) {}

  @ApiOperation({ summary: 'Get server info' })
  @Get('info')
  public async getServerInfo(): Promise<IServerInfo> {
    return {
      name: this.configService.get<string>('server.name'),
    };
  }
}
