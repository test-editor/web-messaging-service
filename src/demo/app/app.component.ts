import { Component } from '@angular/core';
import { MessagingService } from '@testeditor/messaging-service';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private messagingService: MessagingService) {
  }
}
