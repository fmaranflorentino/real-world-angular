import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorBoxComponent } from './indicator-box.component';

describe('IndicatorBoxComponent', () => {
  let component: IndicatorBoxComponent;
  let fixture: ComponentFixture<IndicatorBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
