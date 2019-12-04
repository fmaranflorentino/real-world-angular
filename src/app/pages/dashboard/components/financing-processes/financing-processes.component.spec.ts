import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingProcessesComponent } from './financing-processes.component';

describe('FinancingProcessesComponent', () => {
  let component: FinancingProcessesComponent;
  let fixture: ComponentFixture<FinancingProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancingProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
