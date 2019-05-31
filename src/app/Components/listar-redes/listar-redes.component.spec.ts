import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRedesComponent } from './listar-redes.component';

describe('ListarRedesComponent', () => {
  let component: ListarRedesComponent;
  let fixture: ComponentFixture<ListarRedesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRedesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
