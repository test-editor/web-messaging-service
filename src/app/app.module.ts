import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessagingModule } from './modules/messaging/messaging.module';

import { AppComponent }  from './app.component';
import { SenderComponent } from './sender.component';
import { ReceiverComponent } from './receiver.component';

@NgModule({
  imports: [
    BrowserModule,
    MessagingModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SenderComponent,
    ReceiverComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
