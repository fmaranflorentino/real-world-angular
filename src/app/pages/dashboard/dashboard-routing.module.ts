import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SallesHistoryComponent } from './components/salles-history/salles-history.component';
import { MyInformationComponent } from './components/my-information/my-information.component';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { FinancingProcessesComponent } from './components/financing-processes/financing-processes.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductsTableComponent } from './components/my-products/components/products-table/products-table.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'vendas', component: SallesHistoryComponent },
      {
        path: 'produtos',
        component: MyProductsComponent,
        children: [
          { path: '', component: ProductsTableComponent },
          { path: 'novo', component: NewProductComponent },
        ]
      },
      { path: 'financiamentos', component: FinancingProcessesComponent },
      { path: 'favoritos', component: SallesHistoryComponent },
      { path: 'dados', component: MyInformationComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
