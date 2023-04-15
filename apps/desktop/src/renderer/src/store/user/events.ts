import { $user } from '~/store/domain';

export const setUsername = $user.createEvent<string>('set username');
