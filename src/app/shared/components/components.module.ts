import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base';
import { EconomometerComponent } from './economometer/economometer.component';
import { ProductComponent } from './product/product.component';
import { MaterialModule } from '../material/material.module';
import { SearchPanelComponent } from './header/components/search-panel/search-panel.component';
import { CartPanelComponent } from './header/components/cart-panel/cart-panel.component';
import { StoresPanelComponent } from './header/components/stores-panel/stores-panel.component';

@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    BaseComponent,
    EconomometerComponent, ProductComponent, SearchPanelComponent, CartPanelComponent, StoresPanelComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BaseComponent,
    EconomometerComponent,
    ProductComponent,
    MaterialModule
  ]
})
export class ComponentsModule { }
