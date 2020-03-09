import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScholarshipComponent } from './user-scholarship.component';

describe('ScholarshipComponent', () => {
  let component: UserScholarshipComponent;
  let fixture: ComponentFixture<UserScholarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserScholarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
