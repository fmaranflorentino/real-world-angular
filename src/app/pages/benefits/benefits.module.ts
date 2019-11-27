import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenefitsRoutingModule } from './benefits-routing.module';
import { BenefitsComponent } from './benefits.component';


@NgModule({
  declarations: [BenefitsComponent],
  imports: [
    CommonModule,
    BenefitsRoutingModule
  ]
})
export class BenefitsModule { }
