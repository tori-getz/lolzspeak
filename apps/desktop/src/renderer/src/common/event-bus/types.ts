export type Subscriptions = Record<string, Set<Function>>;

export interface IEventBus {
  subscribe(eventName: string, callback: Function): Function;
  unsubscribe(eventName: string, callback: Function): void;
  broadcast(eventName: string): void;
}

export type EventSubscribe = (callback: Function) => Function;
export type EventBroadcast = () => void;

export interface ICreateEvent {
  subscribe: EventSubscribe;
  broadcast: EventBroadcast;
}

export type CreateEvent = (eventName: string) => ICreateEvent;
