import { TestBed, inject } from '@angular/core/testing';

import { MessagingService } from './messaging.service';

type MessageCallback = (payload: any) => void;

describe('MessagingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagingService]
    });
  });

  it('should create service', inject([MessagingService], (service: MessagingService) => {
    expect(service).toBeTruthy();
  }));

  it('should deliver a message if subscribed', inject([MessagingService], (service: MessagingService) => {
    // given
    let callback = jasmine.createSpy('callback');
    service.subscribe('theTopic', callback);

    // when
    service.publish('theTopic', 'anyPayload');

    // then
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('anyPayload');
  }));

  it('should not deliver messages on unrelated topic', inject([MessagingService], (service: MessagingService) => {
    // given
    let callback = jasmine.createSpy('callback');
    service.subscribe('theTopic', callback);

    // when
    service.publish('unrelatedTopic', 'anyPayload');

    // then
    expect(callback).not.toHaveBeenCalled();
  }));

});
