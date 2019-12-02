import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { MyInformationComponent } from './components/my-information/my-information.component';


@NgModule({
  declarations: [DashboardComponent, MyProductsComponent, MyInformationComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
