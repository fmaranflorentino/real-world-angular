import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorModalComponent } from './simulator-modal.component';

describe('SimulatorModalComponent', () => {
  let component: SimulatorModalComponent;
  let fixture: ComponentFixture<SimulatorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulatorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
