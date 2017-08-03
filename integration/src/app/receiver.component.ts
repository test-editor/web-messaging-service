import { Component, OnDestroy } from '@angular/core';

import { MessagingService } from '@testeditor/messaging-service';
import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'receiver',
  template: `
    <div>
      <h3>Receiver</h3>
      <div id="theMessageDiv">Last message was: {{ lastMessage }}</div>
    </div>
  `
})
export class ReceiverComponent implements OnDestroy {

  private subscription: Subscription;
  public lastMessage: string;

  constructor(private messagingService: MessagingService) {
    this.messagingService.subscribe('interestingTopic', (payload) => {
      this.lastMessage = payload;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}