import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxListControlComponent } from './checkbox-list-control.component';

describe('InlineInputTextComponent', () => {
  let component: CheckboxListControlComponent;
  let fixture: ComponentFixture<CheckboxListControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxListControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
