import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { fadeIn } from 'src/app/shared/helpers/animations';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  animations: [fadeIn],
})
export class NewProductComponent implements OnInit {
  @Output()
  back: EventEmitter<boolean> = new EventEmitter();
  newProductForm: FormGroup;
  currencyOptions = {
    prefix: 'R$ ',
    thousands: '.',
    decimal: ',',
    align: 'left',
    allowNegative: false
  };

  constructor() { }

  ngOnInit() {
    this.createNewProductForm();
  }

  createNewProductForm(): void {
    this.newProductForm = new FormGroup({
      productName: new FormControl(null, { validators: Validators.required }),
      totalPrice: new FormControl(null, { validators: Validators.required }),
      discountPrice: new FormControl(null, { validators: Validators.required }),
      limitDate: new FormControl(null, { validators: Validators.required }),
      limitTime: new FormControl(null, { validators: Validators.required }),
      stock: new FormControl(null, { validators: Validators.required }),
    });
  }

  errorsHandler(control) {
    return (this.controls[control].errors &&
      this.controls[control].errors.required) &&
      this.controls[control].touched;
  }

  toggleIsNewProduct(): void {
    this.back.emit(true);
  }

  get controls(): any {
    return this.newProductForm.controls;
  }

  get formValidation(): boolean {
    return this.newProductForm.valid;
  }

}
