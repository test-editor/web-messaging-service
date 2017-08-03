import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagingService } from './messaging.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: []
})
export class MessagingModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessagingModule,
      providers: [ MessagingService ]
    };
  }

}