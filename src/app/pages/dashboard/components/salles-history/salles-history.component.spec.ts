import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesHistoryComponent } from './salles-history.component';

describe('SallesHistoryComponent', () => {
  let component: SallesHistoryComponent;
  let fixture: ComponentFixture<SallesHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallesHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SallesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
