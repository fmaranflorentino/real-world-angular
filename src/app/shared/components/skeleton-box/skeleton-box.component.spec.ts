import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonBoxComponent } from './skeleton-box.component';

describe('SkeletonBoxComponent', () => {
  let component: SkeletonBoxComponent;
  let fixture: ComponentFixture<SkeletonBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
