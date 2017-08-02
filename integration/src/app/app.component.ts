import { Component } from '@angular/core';
import { MessagingService } from '@testeditor/messaging-service';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // note that for AOT compilation all properties used within a template must be public
  constructor(public messagingService: MessagingService) {
  }
}
