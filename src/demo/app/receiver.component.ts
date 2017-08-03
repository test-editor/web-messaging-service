import { Component, OnDestroy } from '@angular/core';

import { MessagingService } from '@testeditor/messaging-service';
import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'receiver',
  template: `
    <div>
      <h3>Receiver</h3>
      Last message was: {{ lastMessage }}
    </div>
  `
})
export class ReceiverComponent implements OnDestroy {

  private subscription: Subscription;
  private lastMessage: string;

  constructor(private messagingService: MessagingService) {
    this.messagingService.subscribe('interestingTopic', (payload) => {
      this.lastMessage = payload;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}