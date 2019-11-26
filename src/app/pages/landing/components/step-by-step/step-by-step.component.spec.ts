import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepByStepComponent } from './step-by-step.component';

describe('StepByStepComponent', () => {
  let component: StepByStepComponent;
  let fixture: ComponentFixture<StepByStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepByStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepByStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
