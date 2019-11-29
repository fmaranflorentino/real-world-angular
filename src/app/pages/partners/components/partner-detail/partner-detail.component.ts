import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partner-detail',
  templateUrl: './partner-detail.component.html',
  styleUrls: ['./partner-detail.component.scss']
})
export class PartnerDetailComponent implements OnInit {

  productsOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 4,
    dotsSpeed: 500,
    dots: false,
    smartSpeed: 400,
    dragEndSpeed: 350,
    nav: true,
    navText: ["<img src='./../../../../assets/img/icons/arrow-back.png'>","<img src='./../../../../assets/img/icons/arrow-next.png'>"],
    responsive: {
        0: {
          items: 1,
          nav: false,
        },
        768: {
          items: 4
        }
      }
  }
  constructor() { }

  ngOnInit() {
  }

}
