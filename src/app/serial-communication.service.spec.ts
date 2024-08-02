import { TestBed } from '@angular/core/testing';

import { SerialCommunicationService } from './serial-communication.service';

describe('SerialCommunicationService', () => {
  let service: SerialCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerialCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
