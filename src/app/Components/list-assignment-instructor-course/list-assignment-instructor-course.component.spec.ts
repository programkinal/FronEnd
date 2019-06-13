import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssignmentInstructorCourseComponent } from './list-assignment-instructor-course.component';

describe('ListAssignmentInstructorCourseComponent', () => {
  let component: ListAssignmentInstructorCourseComponent;
  let fixture: ComponentFixture<ListAssignmentInstructorCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAssignmentInstructorCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAssignmentInstructorCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
