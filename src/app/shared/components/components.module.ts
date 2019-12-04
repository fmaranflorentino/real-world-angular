import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { declarations, components, modules } from './components-references';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component'
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';
import { SkeletonBoxComponent } from './skeleton-box/skeleton-box.component'


@NgModule({
  declarations: [
    LoginModalComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
    SkeletonBoxComponent,
    ...declarations,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...modules,
  ],
  exports: [
    LoginModalComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
    SkeletonBoxComponent,
    ...modules,
    ...components,
  ],
  entryComponents: [ LoginModalComponent ]
})
export class ComponentsModule { }
