import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatMenuModule, MatInputModule, MatTabsModule, MatRippleModule, MatExpansionModule, MatIconModule, MatDialogModule, MatTooltipModule } from '@angular/material';

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
    MatDialogModule,
    MatTooltipModule,
    MatTabsModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
