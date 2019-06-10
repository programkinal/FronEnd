import { TestBed } from '@angular/core/testing';

import { AssignmentServicesService } from './assignment-services.service';

describe('AssignmentServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignmentServicesService = TestBed.get(AssignmentServicesService);
    expect(service).toBeTruthy();
  });
});
