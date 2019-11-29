import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PartnersComponent } from './partners/partners.component';
import { PartnerDetailComponent } from './components/partner-detail/partner-detail.component';


@NgModule({
  declarations: [PartnersComponent, PartnerDetailComponent],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    SharedModule
  ]
})
export class PartnersModule { }
