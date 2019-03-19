import {map, filter} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Message } from './message';

@Injectable()
export class MessagingService {

  private handler = new Subject<Message>();

  public publish(type: string, payload: any): void {
    this.handler.next({ type, payload });
  }

  public subscribe(type: string, callback: (payload: any) => void): Subscription {
    return this.handler.pipe(
      filter(m => m.type === type),
      map(m => m.payload))
      .subscribe(callback);
  }

  public subscribeAll(callback: (message: Message) => void): Subscription {
    return this.handler.subscribe(callback);
  }

}
