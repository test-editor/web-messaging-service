import { Component } from '@angular/core';
import { MessagingService } from './modules/messaging/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public messagingService: MessagingService) {
  }
}
