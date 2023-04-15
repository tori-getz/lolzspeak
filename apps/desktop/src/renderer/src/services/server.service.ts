import { inject, injectable } from "inversify";
import { HTTP_CLIENT_MANAGER } from "~/common/di";
import type { IHttpClientManager } from "~/common/http";
import { IServer, IServerInfo } from "~/types";
import { v4 as uuidv4 } from 'uuid';
import { $username } from "~/store/user";
import { addServer, connectServer } from "~/store/server";

@injectable()
export class ServerService {
  @inject(HTTP_CLIENT_MANAGER)
  private readonly httpClientManager!: IHttpClientManager;

  public async getInfo(host: string): Promise<IServerInfo> {
    const http = this.httpClientManager.getBaseClient().extend({
      prefixUrl: host,
    });

    return await http.get('info').json();
  }

  public async join(host: string, name: string): Promise<IServer> {
    const id = uuidv4();

    const http = this.httpClientManager.createClient(id, host);

    await http.post('user/join', {
      json: { name: $username.getState() }
    });

    const server = {
      id,
      host,
      name,
    };

    addServer(server);

    return server;
  }

  public connect(server: IServer) {
    connectServer(server);
  }
}
