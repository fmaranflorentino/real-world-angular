import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

import { LandingComponent } from './landing/landing.component';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { StoresCarouselComponent } from './components/stores-carousel/stores-carousel.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { StepByStepComponent } from './components/step-by-step/step-by-step.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { SellersComponent } from './components/sellers/sellers.component';


@NgModule({
  declarations: [LandingComponent, BannerCarouselComponent, StoresCarouselComponent, SimulatorComponent, StepByStepComponent, FacilitiesComponent, SellersComponent,],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
  ]
})
export class LandingModule { }
