import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss']
})
export class ProductsCarouselComponent implements OnInit {
  @Input()
  set title(value: string) {
    this.sectionTitle = value;
  }

  @Input()
  set products(value: any[]) {
    this.productsList = value;
  }

  productsList;
  sectionTitle;

  productsOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 4,
    dotsSpeed: 500,
    dots: false,
    smartSpeed: 400,
    dragEndSpeed: 350,
    nav: true,
    navText: ["<img src='../../../../assets/img/icons/arrow-back.png'>", "<img src='../../../../assets/img/icons/arrow-next.png'>"],
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        768: {
            items: 4
        }
    }
};

  constructor() { }

  ngOnInit() {
  }

}
