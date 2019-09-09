import { TestBed } from '@angular/core/testing';

import { FishingspotService } from './fishingspot.service';

describe('FishingspotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FishingspotService = TestBed.get(FishingspotService);
    expect(service).toBeTruthy();
  });
});
