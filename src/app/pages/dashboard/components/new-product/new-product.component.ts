import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyMaskConfig } from 'ngx-currency';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  @Output()
  back: EventEmitter<boolean>  = new EventEmitter();
  currencyOptions = {
    prefix: 'R$ ',
    thousands: '.',
    decimal: ',',
    align: 'left',
    allowNegative: false
  };

  constructor() { }

  ngOnInit() {
  }

  toggleIsNewProduct(): void {
      this.back.emit(true);
  }

}
