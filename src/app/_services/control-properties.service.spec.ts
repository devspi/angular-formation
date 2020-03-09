import { TestBed } from '@angular/core/testing';

import { ControlPropertiesService } from './control-properties.service';

describe('LabelpropertiesService', () => {
  let service: ControlPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
