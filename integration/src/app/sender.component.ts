import { Component } from '@angular/core';

import { MessagingService } from '@testeditor/messaging-service';
import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'sender',
  template: `
    <div>
      <h3>Sender</h3>
      <input #message> <button (click)="sendMessage(message.value)">Send</button>
    </div>
  `
})
export class SenderComponent {

  constructor(private messagingService: MessagingService) {
  }

  sendMessage(value: string): void {
    this.messagingService.publish('interestingTopic', value);
  }

}