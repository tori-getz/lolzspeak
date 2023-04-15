import { $audio } from '~/store/domain';

export const getDevicesFx = $audio.createEffect(async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();

  return devices;
});
