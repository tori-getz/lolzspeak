import { KyInstance } from "ky/distribution/types/ky";
import { IHttpClientManager } from "./types";
import ky from "ky";
import { injectable } from "inversify";

@injectable()
export class HttpClientManager implements IHttpClientManager {
  private instances: Map<string, KyInstance> = new Map();

  public getBaseClient(): KyInstance {
    return ky;
  }

  public createClient(id: string, host: string): KyInstance {
    const instance = ky.extend({
      prefixUrl: host,
    });

    this.instances.set(id, instance);

    return this.instances.get(id) as KyInstance;
  }
}
