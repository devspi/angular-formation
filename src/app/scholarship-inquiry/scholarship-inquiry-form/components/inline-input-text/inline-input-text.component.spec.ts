import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineInputTextComponent } from './inline-input-text.component';

describe('InlineInputTextComponent', () => {
  let component: InlineInputTextComponent;
  let fixture: ComponentFixture<InlineInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
