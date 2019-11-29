import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnersComponent } from './partners/partners.component';
import { PartnerDetailComponent } from './components/partner-detail/partner-detail.component';

const routes: Routes = [
  { path: '', component: PartnersComponent },
  { path: ':id/detalhe', component: PartnerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersRoutingModule { }
