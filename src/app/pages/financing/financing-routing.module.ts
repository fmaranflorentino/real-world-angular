import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancingComponent } from './financing.component';

const routes: Routes = [{ path: '', component: FinancingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancingRoutingModule { }
