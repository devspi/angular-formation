import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMaritalStatusComponent } from './select-marital-status.component';

describe('SelectMaritalStatusComponent', () => {
  let component: SelectMaritalStatusComponent;
  let fixture: ComponentFixture<SelectMaritalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMaritalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMaritalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
