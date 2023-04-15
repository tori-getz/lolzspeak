import { $server } from '~/store/domain';
import { IServer } from '~/types';
import { persist } from '~/store/persist';

export const $connectedServer = $server.createStore<IServer | null>(null, { name: 'connected server' });

export const $serverList = $server.createStore<IServer[]>([], { name: 'server list' });
persist({ store: $serverList, key: 'server-list' });
