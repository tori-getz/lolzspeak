import 'reflect-metadata';
import { Container } from 'inversify';

import { AUDIO_INPUT_MANAGER, EVENT_BUS, HTTP_CLIENT_MANAGER, SERVER_SERVICE, USER_SERVICE } from './types';

import { EventBus, IEventBus } from '~/common/event-bus';
import { AudioInputManager, IAudioInputManager } from '~/common/audio';
import { HttpClientManager, IHttpClientManager } from '~/common/http';
import { ServerService, UserService } from '~/services';

const container = new Container();

// event bus
container.bind<IEventBus>(EVENT_BUS).to(EventBus);

// audio
container.bind<IAudioInputManager>(AUDIO_INPUT_MANAGER).to(AudioInputManager);

// http
container.bind<IHttpClientManager>(HTTP_CLIENT_MANAGER).to(HttpClientManager);

// services
container.bind<ServerService>(SERVER_SERVICE).to(ServerService);
container.bind<UserService>(USER_SERVICE).to(UserService);

export { container };
