import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { }

  open(component, config: MatDialogConfig) {
    const ref = this.dialog.open(component, { ...config });

    return ref;
  }
}
