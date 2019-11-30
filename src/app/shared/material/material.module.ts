import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatMenuModule, MatInputModule, MatRippleModule, MatExpansionModule, MatIconModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
