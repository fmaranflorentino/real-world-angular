import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomometerComponent } from './economometer.component';

describe('EconomometerComponent', () => {
  let component: EconomometerComponent;
  let fixture: ComponentFixture<EconomometerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomometerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
