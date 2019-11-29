import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { declarations, components, modules } from './components-references';


@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...modules,
  ],
  exports: [
    ...modules,
    ...components
  ]
})
export class ComponentsModule { }
