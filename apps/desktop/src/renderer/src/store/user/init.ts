import { $username } from './stores';

import { setUsername } from './events';

$username.on(setUsername, (_, username) => username);
