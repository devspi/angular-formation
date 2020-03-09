import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenRowComponent } from './children-row.component';

describe('ChildrenInfoComponent', () => {
  let component: ChildrenRowComponent;
  let fixture: ComponentFixture<ChildrenRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
