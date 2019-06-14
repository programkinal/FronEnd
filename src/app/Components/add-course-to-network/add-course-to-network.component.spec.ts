import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseToNetworkComponent } from './add-course-to-network.component';

describe('AddCourseToNetworkComponent', () => {
  let component: AddCourseToNetworkComponent;
  let fixture: ComponentFixture<AddCourseToNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseToNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseToNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
