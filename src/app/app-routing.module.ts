import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
  },
  { path: 'produtos', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'parceiros', loadChildren: () => import('./pages/partners/partners.module').then(m => m.PartnersModule) },
  { path: 'beneficios', loadChildren: () => import('./pages/benefits/benefits.module').then(m => m.BenefitsModule) },
  { path: 'simulador', loadChildren: () => import('./pages/simulator/simulator.module').then(m => m.SimulatorModule) },
  { path: 'sobre', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'financiamento', loadChildren: () => import('./pages/financing/financing.module').then(m => m.FinancingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
