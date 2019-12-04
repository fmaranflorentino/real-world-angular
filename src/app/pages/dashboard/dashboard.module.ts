import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { MyInformationComponent } from './components/my-information/my-information.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { FinancingProcessesComponent } from './components/financing-processes/financing-processes.component';
import { SallesHistoryComponent } from './components/salles-history/salles-history.component';

@NgModule({
  declarations: [DashboardComponent, MyProductsComponent, MyInformationComponent, NewProductComponent, FinancingProcessesComponent, SallesHistoryComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
