import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadBannerComponent } from './lead-banner.component';

describe('LeadBannerComponent', () => {
  let component: LeadBannerComponent;
  let fixture: ComponentFixture<LeadBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
