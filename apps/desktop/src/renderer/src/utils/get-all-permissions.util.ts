import { IAudioInputManager } from '~/common/audio';
import { AUDIO_INPUT_MANAGER, container } from '~/common/di';

export const getAllPermissions = async () => {
  const audioInputManager = container.get<IAudioInputManager>(AUDIO_INPUT_MANAGER);

  const audioPermissions = await audioInputManager.getPermissions();

  console.log(audioPermissions);
};
