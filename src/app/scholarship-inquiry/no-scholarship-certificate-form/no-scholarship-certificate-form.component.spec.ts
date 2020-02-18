import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoScholarshipCertificateFormComponent } from './no-scholarship-certificate-form.component';

describe('NoScholarshipCertificateFormComponent', () => {
  let component: NoScholarshipCertificateFormComponent;
  let fixture: ComponentFixture<NoScholarshipCertificateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoScholarshipCertificateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoScholarshipCertificateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
