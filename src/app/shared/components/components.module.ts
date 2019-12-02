import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { declarations, components, modules } from './components-references';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component'
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component'


@NgModule({
  declarations: [
    LoginModalComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
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
    ...modules,
    ...components,
  ],
  entryComponents: [ LoginModalComponent ]
})
export class ComponentsModule { }
