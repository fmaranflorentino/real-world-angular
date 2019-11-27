import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenefitsComponent } from './benefits.component';

const routes: Routes = [{ path: '', component: BenefitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenefitsRoutingModule { }
