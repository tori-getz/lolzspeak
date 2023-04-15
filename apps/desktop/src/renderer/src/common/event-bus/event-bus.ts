import { injectable } from "inversify";
import type {
  IEventBus,
  Subscriptions
} from "./types";

@injectable()
export class EventBus implements IEventBus {
  private subscriptions: Subscriptions = {};
  private static instance: EventBus;

  public static getInstance(): EventBus {
    if (!this.instance) {
      this.instance = new EventBus();
    }

    return this.instance;
  }

  public subscribe(
    eventName: string,
    callback: Function,
  ): Function {
    if (!this.subscriptions[eventName]) {
      this.subscriptions[eventName] = new Set();
    }

    this.subscriptions[eventName].add(callback);

    return () => this.unsubscribe(eventName, callback);
  }

  public unsubscribe(
    eventName: string,
    callback: Function
  ): void {
    const callbacks = this.subscriptions[eventName];

    callbacks.delete(callback);

    if (callbacks.size === 0) {
      delete this.subscriptions[eventName];
    }
  }

  public broadcast(eventName: string): void {
    const callbacks = this.subscriptions[eventName];

    if (!callbacks) return;

    for (const callback of callbacks) {
      callback();
    }
  }
}
