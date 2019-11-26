import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresCarouselComponent } from './stores-carousel.component';

describe('StoresCarouselComponent', () => {
  let component: StoresCarouselComponent;
  let fixture: ComponentFixture<StoresCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
