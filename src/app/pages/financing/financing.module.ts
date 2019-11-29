import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancingRoutingModule } from './financing-routing.module';
import { FinancingComponent } from './financing/financing.component';


@NgModule({
  declarations: [FinancingComponent],
  imports: [
    CommonModule,
    FinancingRoutingModule
  ]
})
export class FinancingModule { }
