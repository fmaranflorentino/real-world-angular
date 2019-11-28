import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSimulatorComponent } from './range-simulator.component';

describe('RangeSimulatorComponent', () => {
  let component: RangeSimulatorComponent;
  let fixture: ComponentFixture<RangeSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
