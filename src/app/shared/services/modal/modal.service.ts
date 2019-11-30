import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { }

  open(component) {
   const ref =  this.dialog.open(component, {
      width: '570px',
      data: {teste: ''}
    });

    return ref;
  }
}
