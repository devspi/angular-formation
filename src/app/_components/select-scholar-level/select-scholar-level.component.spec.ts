import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectScholarLevelComponent } from './select-scholar-level.component';

describe('SelectScholarLevelComponent', () => {
  let component: SelectScholarLevelComponent;
  let fixture: ComponentFixture<SelectScholarLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectScholarLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScholarLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
