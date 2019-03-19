import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
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
