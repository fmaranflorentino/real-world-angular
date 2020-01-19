import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductTabsComponent } from './components/product-detail/components/product-tabs/product-tabs.component';


@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent, ProductTabsComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
})
export class ProductsModule { }
