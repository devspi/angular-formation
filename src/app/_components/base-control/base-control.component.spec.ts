import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseControlComponent } from './base-control.component';

describe('InlineInputTextComponent', () => {
  let component: BaseControlComponent;
  let fixture: ComponentFixture<BaseControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
