import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ComponentsModule } from './components/components.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxGalleryModule } from 'ngx-gallery';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxCurrencyModule } from 'ngx-currency';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    NgxPaginationModule,
    NgxGalleryModule,
    PerfectScrollbarModule,
    NgxCurrencyModule,
  ],
  exports: [
    ComponentsModule,
    NgxPaginationModule,
    NgxGalleryModule,
    PerfectScrollbarModule,
    NgxCurrencyModule,
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: SharedModule },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ]
})
export class SharedModule extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  } as any;
}
