import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkvCalenderComponent } from './skv-calender.component';

describe('SkvCalenderComponent', () => {
  let component: SkvCalenderComponent;
  let fixture: ComponentFixture<SkvCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkvCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkvCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
