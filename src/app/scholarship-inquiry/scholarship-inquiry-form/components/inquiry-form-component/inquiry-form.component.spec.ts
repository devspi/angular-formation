import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryFormComponent } from './inquiry-form.component';

describe('InquiryFormComponentComponent', () => {
  let component: InquiryFormComponent;
  let fixture: ComponentFixture<InquiryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
