import { TestBed } from '@angular/core/testing';

import { LabelPropertiesService } from './label-properties.service';

describe('LabelpropertiesService', () => {
  let service: LabelPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
