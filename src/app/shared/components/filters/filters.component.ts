import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  priceRangeList: any;

  @Input()
  set priceRange(value) {
    this.priceRangeList = value;
  }

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
  }

  setPriceRangeFilter(price) {
    const minValue = price.valorMinimo;
    const maxValue = price.valorMaximo;

    this.productsService.getProducts({ valorMinimo: minValue, valorMaximo: maxValue, orderDesc: true })
      .subscribe((response) => { console.log(response); });
  }

}
