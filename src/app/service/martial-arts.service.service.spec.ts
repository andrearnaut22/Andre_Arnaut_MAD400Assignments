import { TestBed } from '@angular/core/testing';

import { MartialArtsServiceService } from './martial-arts.service.service';

describe('MartialArtsServiceService', () => {
  let service: MartialArtsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MartialArtsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
