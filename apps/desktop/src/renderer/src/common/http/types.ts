import type { KyInstance } from 'ky/distribution/types/ky';

export interface IHttpClientManager {
  createClient(id: string, host: string): KyInstance;
  getBaseClient(): KyInstance;
};
