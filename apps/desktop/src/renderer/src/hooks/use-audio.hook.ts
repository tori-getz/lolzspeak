import { useStore } from 'effector-react';

import { $availableDevices } from '~/store/audio';

interface IUseAudio {
  availableDevices: Array<MediaDeviceInfo | InputDeviceInfo >;
}

export const useAudio = (): IUseAudio => {
  const availableDevices = useStore($availableDevices);

  return {
    availableDevices
  };
};
