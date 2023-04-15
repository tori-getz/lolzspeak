import { $server } from '~/store/domain';
import { IServer } from '~/types';

export const addServer = $server.createEvent<IServer>('add server');
export const connectServer = $server.createEvent<IServer>('connect server');
