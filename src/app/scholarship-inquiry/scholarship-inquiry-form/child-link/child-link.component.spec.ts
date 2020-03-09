import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLinkComponent } from './child-link.component';

describe('FamilySituationComponent', () => {
  let component: ChildLinkComponent;
  let fixture: ComponentFixture<ChildLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
