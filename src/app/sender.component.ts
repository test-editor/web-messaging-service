import { Component } from '@angular/core';
import { MessagingService } from './modules/messaging/messaging.service';


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
