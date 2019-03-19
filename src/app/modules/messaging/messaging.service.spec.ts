import { TestBed } from '@angular/core/testing';
import { MessagingService } from './messaging.service';


describe('MessagingService', () => {

  let service: MessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagingService]
    });
    service = TestBed.get(MessagingService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should deliver a message if subscribed', () => {
    // given
    let callback = jasmine.createSpy('callback');
    service.subscribe('theTopic', callback);

    // when
    service.publish('theTopic', 'anyPayload');

    // then
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('anyPayload');
  });

  it('should not deliver messages on unrelated topic', () => {
    // given
    let callback = jasmine.createSpy('callback');
    service.subscribe('theTopic', callback);

    // when
    service.publish('unrelatedTopic', 'anyPayload');

    // then
    expect(callback).not.toHaveBeenCalled();
  });

  it('should deliver any message if subscribed for all', () => {
    // given
    let callback = jasmine.createSpy('callback');
    service.subscribeAll(callback);

    // when
    service.publish('topicA', 'payloadA');
    service.publish('topicB', 'payloadB');

    // then
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith({type: 'topicA', payload: 'payloadA'});
    expect(callback).toHaveBeenCalledWith({type: 'topicB', payload: 'payloadB'});
  });

});
