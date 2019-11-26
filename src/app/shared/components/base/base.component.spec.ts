import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent } from './base.component';
import { DebugElement } from '@angular/core';
import { SharedModule } from '../../shared.module';

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BaseComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
