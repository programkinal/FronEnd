import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourseToNetworkComponent } from './list-course-to-network.component';

describe('ListCourseToNetworkComponent', () => {
  let component: ListCourseToNetworkComponent;
  let fixture: ComponentFixture<ListCourseToNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCourseToNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourseToNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
