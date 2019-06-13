import { TestBed } from '@angular/core/testing';

import { AssignmentInstructorCourseService } from './assignment-instructor-course.service';

describe('AssignmentInstructorCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignmentInstructorCourseService = TestBed.get(AssignmentInstructorCourseService);
    expect(service).toBeTruthy();
  });
});
