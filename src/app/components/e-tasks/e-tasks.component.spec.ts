import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETasksComponent } from './e-tasks.component';

describe('ETasksComponent', () => {
  let component: ETasksComponent;
  let fixture: ComponentFixture<ETasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
