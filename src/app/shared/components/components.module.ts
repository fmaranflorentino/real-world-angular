import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { declarations, components, modules } from './components-references';
import { LoginModalComponent } from './login-modal/login-modal.component';


@NgModule({
  declarations: [
    LoginModalComponent,
    ...declarations,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...modules,
  ],
  exports: [
    LoginModalComponent,
    ...modules,
    ...components,
  ],
  entryComponents: [ LoginModalComponent ]
})
export class ComponentsModule { }
