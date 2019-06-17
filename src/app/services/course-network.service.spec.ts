import { TestBed } from '@angular/core/testing';

import { CourseNetworkService } from './course-network.service';

describe('CourseNetworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseNetworkService = TestBed.get(CourseNetworkService);
    expect(service).toBeTruthy();
  });
});
