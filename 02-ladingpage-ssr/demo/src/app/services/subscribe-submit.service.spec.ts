import { TestBed } from '@angular/core/testing';

import { SubscribeSubmitService } from './subscribe-submit.service';

describe('SubscribeSubmitService', () => {
  let service: SubscribeSubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribeSubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
