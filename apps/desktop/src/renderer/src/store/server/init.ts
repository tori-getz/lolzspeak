import {
  $connectedServer,
  $serverList
} from './stores';

import {
  addServer, connectServer
} from './events';

$serverList.on(addServer, (prev, server) => [...prev, server])
$connectedServer.on(connectServer, (_, server) => server);
