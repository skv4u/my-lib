import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkvEditorComponent } from './skv-editor.component';

describe('SkvEditorComponent', () => {
  let component: SkvEditorComponent;
  let fixture: ComponentFixture<SkvEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkvEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkvEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
