import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipInquiryFormComponent } from './scholarship-inquiry-form.component';

describe('ScholarshipInquiryFormComponent', () => {
  let component: ScholarshipInquiryFormComponent;
  let fixture: ComponentFixture<ScholarshipInquiryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipInquiryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipInquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
