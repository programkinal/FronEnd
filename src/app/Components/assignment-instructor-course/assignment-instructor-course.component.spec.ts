import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentInstructorCourseComponent } from './assignment-instructor-course.component';

describe('AssignmentInstructorCourseComponent', () => {
  let component: AssignmentInstructorCourseComponent;
  let fixture: ComponentFixture<AssignmentInstructorCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentInstructorCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentInstructorCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
