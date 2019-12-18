import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { declarations, components, modules } from './components-references';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component'
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';
import { SkeletonBoxComponent } from './skeleton-box/skeleton-box.component'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { PwaButtonComponent } from './pwa-button/pwa-button.component';


@NgModule({
  declarations: [
    LoginModalComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
    SkeletonBoxComponent,
    PwaButtonComponent,
    ErrorModalComponent,
    SuccessModalComponent,
    ...declarations,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...modules,
  ],
  exports: [
    LoginModalComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
    SkeletonBoxComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorModalComponent,
    SuccessModalComponent,
    PwaButtonComponent,
    ...modules,
    ...components,
  ],
  entryComponents: [ LoginModalComponent, ErrorModalComponent, SuccessModalComponent ]
})
export class ComponentsModule { }
