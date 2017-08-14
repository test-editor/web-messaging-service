import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

import { Message } from './message';

@Injectable()
export class MessagingService {

  private handler = new Subject<Message>();

  public publish(type: string, payload: any): void {
    this.handler.next({ type, payload });
  }

  public subscribe(type: string, callback: (payload: any) => void): Subscription {
    return this.handler
      .filter(m => m.type === type)
      .map(m => m.payload)
      .subscribe(callback);
  }

  public subscribeAll(callback: (message: Message) => void): Subscription {
    return this.handler.subscribe(callback);
  }

}
