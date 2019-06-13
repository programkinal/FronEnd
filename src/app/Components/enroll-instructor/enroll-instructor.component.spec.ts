import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollInstructorComponent } from './enroll-instructor.component';

describe('EnrollInstructorComponent', () => {
  let component: EnrollInstructorComponent;
  let fixture: ComponentFixture<EnrollInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
