import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangerComponent } from './hanger.component';

describe('HangerComponent', () => {
  let component: HangerComponent;
  let fixture: ComponentFixture<HangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
