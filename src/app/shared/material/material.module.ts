import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatMenuModule, MatInputModule, MatRippleModule, MatExpansionModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class MaterialModule { }
