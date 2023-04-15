import { $user } from '~/store/domain';
import { persist } from '~/store/persist';

export const $username = $user.createStore<string>('', { name: 'name' });
persist({ store: $username, key: 'name' });
