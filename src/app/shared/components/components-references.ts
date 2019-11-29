import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base';
import { EconomometerComponent } from './economometer/economometer.component';
import { ProductComponent } from './product/product.component';
import { SearchPanelComponent } from './header/components/search-panel/search-panel.component';
import { CartPanelComponent } from './header/components/cart-panel/cart-panel.component';
import { StoresPanelComponent } from './header/components/stores-panel/stores-panel.component';
import { RangeSimulatorComponent } from './range-simulator/range-simulator.component';
import { CategoriesComponent } from './categories/categories.component';
import { FiltersComponent } from './filters/filters.component';
import { FiltersMobileComponent } from './filters-mobile/filters-mobile.component';
import { PartnerComponent } from './partner/partner.component';
import { LeadBannerComponent } from './lead-banner/lead-banner.component';
import { IndicatorBoxComponent } from './indicator-box/indicator-box.component';
import { ProductsCarouselComponent } from './products-carousel/products-carousel.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from '../material/material.module';
import { Ng5SliderModule } from 'ng5-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


export const components = [
    HeaderComponent,
    FooterComponent,
    BaseComponent,
    EconomometerComponent,
    ProductComponent,
    CategoriesComponent,
    FiltersComponent,
    FiltersMobileComponent,
    RangeSimulatorComponent,
    PartnerComponent,
    LeadBannerComponent,
    IndicatorBoxComponent,
    ProductsCarouselComponent
];

export const declarations = [
    ...components,
    SearchPanelComponent,
    CartPanelComponent,
    StoresPanelComponent
];

export const modules = [
    CarouselModule,
    MaterialModule,
    Ng5SliderModule,
    FontAwesomeModule
];

