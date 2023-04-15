import {
  CreateEvent,
  EventBroadcast,
  EventSubscribe,
  IEventBus
} from "./types";

import { EVENT_BUS, container } from '~/common/di';

export const createEvent: CreateEvent = eventName => {
  const eventBus = container.get<IEventBus>(EVENT_BUS);

  const subscribe: EventSubscribe = callback => {
    return eventBus.subscribe(eventName, callback);
  }

  const broadcast: EventBroadcast = () => {
    eventBus.broadcast(eventName);
  }

  return {
    subscribe,
    broadcast,
  };
};
