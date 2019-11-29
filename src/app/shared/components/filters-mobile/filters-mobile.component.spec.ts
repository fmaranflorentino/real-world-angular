import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersMobileComponent } from './filters-mobile.component';

describe('FiltersMobileComponent', () => {
  let component: FiltersMobileComponent;
  let fixture: ComponentFixture<FiltersMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
