import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenefitsRoutingModule } from './benefits-routing.module';
import { BenefitsComponent } from './benefits.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BenefitsComponent],
  imports: [
    CommonModule,
    BenefitsRoutingModule,
    SharedModule
  ]
})
export class BenefitsModule { }
