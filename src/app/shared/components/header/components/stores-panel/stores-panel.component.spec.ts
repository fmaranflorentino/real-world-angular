import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresPanelComponent } from './stores-panel.component';

describe('StoresPanelComponent', () => {
  let component: StoresPanelComponent;
  let fixture: ComponentFixture<StoresPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
