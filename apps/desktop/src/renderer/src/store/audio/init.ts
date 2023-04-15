import {
  $availableDevices
} from './stores';

import {
  getDevicesFx
} from './effects';

$availableDevices.on(getDevicesFx.doneData, (_, devices) => devices);

getDevicesFx();
