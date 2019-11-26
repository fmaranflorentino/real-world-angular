import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { Ng5SliderModule } from 'ng5-slider';

import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    CarouselModule,
    Ng5SliderModule
  ],
  exports: [
    ComponentsModule,
    CarouselModule,
    Ng5SliderModule
  ],
})
export class SharedModule { }
