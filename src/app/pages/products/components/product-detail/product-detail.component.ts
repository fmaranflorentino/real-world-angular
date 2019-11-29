import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import "hammerjs";
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  faStar = faStar;

  productsOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 4,
    dotsSpeed: 500,
    dots: false,
    smartSpeed: 400,
    dragEndSpeed: 350,
    nav: true,
    navText: ["<img src='./../../../../../assets/img/icons/arrow-back.png'>","<img src='./../../../../../assets/img/icons/arrow-next.png'>"],
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

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '100%',
          height: '450px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = [
      {
          small: './../../../../../assets/img/parceiro.jpg',
          medium: './../../../../../assets/img/parceiro.jpg',
          big: './../../../../../assets/img/parceiro.jpg'
      },
      {
        small: './../../../../../assets/img/parceiro.jpg',
        medium: './../../../../../assets/img/parceiro.jpg',
        big: './../../../../../assets/img/parceiro.jpg'
      },
      {
        small: './../../../../../assets/img/parceiro.jpg',
        medium: './../../../../../assets/img/parceiro.jpg',
        big: './../../../../../assets/img/parceiro.jpg'
      }
  ];
  }

}
