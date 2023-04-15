import { $audio } from '~/store/domain';

export const $availableDevices = $audio.createStore<Array<MediaDeviceInfo | InputDeviceInfo>>([], { name: 'available devices' });
