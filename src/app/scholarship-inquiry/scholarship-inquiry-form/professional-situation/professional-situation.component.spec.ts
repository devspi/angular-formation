import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSituationComponent } from './professional-situation.component';

describe('FamilySituationComponent', () => {
  let component: ProfessionalSituationComponent;
  let fixture: ComponentFixture<ProfessionalSituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalSituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
