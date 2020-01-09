import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import "hammerjs";
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

import { faStar, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CacheService } from 'src/app/shared/services/cache/cache.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  faStar = faStar;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;

  productsOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 4,
    dotsSpeed: 500,
    dots: false,
    smartSpeed: 400,
    dragEndSpeed: 350,
    nav: true,
    navText: ["<img src='./../../../../../assets/img/icons/arrow-back.png'>", "<img src='./../../../../../assets/img/icons/arrow-next.png'>"],
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

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];
  productType: 'product' | 'service' = 'product';
  productId;
  productDetails;
  productDescription: any;
  base64FirstImage: string;
  handleGallery: boolean;


  constructor(
    private cacheService: CacheService,
    private route: ActivatedRoute,
    private products$: ProductsService,
    private sanitizer: DomSanitizer,
  ) {
    this.route.paramMap.subscribe((params: any) => {
      this.productId = params.params.id;

      this.products$.getProductById(this.productId)
        .subscribe(response => {
          this.productDetails = response;
          this.getProductDescription();
          this.base64FirstImage = this.productFirstImg;

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

          this.productDetails.imagens.map((item, index) => {
            const img: any = this.transformImage(index);

            this.galleryImages.push({
              small: img.changingThisBreaksApplicationSecurity,
              medium: img.changingThisBreaksApplicationSecurity,
              big: img.changingThisBreaksApplicationSecurity
            });

          })

          // const img: any = this.transform();

          // this.galleryImages = [
          //   {
          //     small: img.changingThisBreaksApplicationSecurity,
          //     medium: img.changingThisBreaksApplicationSecurity,
          //     big: img.changingThisBreaksApplicationSecurity
          //   },
          //   {
          //     small: img.changingThisBreaksApplicationSecurity,
          //     medium: img.changingThisBreaksApplicationSecurity,
          //     big: img.changingThisBreaksApplicationSecurity
          //   },
          //   {
          //     small: img.changingThisBreaksApplicationSecurity,
          //     medium: img.changingThisBreaksApplicationSecurity,
          //     big: img.changingThisBreaksApplicationSecurity
          //   }
          // ];


          setTimeout(() => {

            this.handleGallery = true;
          }, 4000);

        });
    });
  }

  ngOnInit() {





  }

  insertOnCache() {
    const arr = [
      { title: 'um' },
      { title: 'dois' },
      { title: 'dois' },
    ];
    this.cacheService.setStorage('favoritos', JSON.stringify(arr));
  }

  getProductDescription() {

    if (this.productDetails && this.productDetails.atributos) {
      this.productDetails
        .atributos.map((attr) => {
          if (attr.tipo.nome === 'Descricao') {
            this.productDescription = attr;
            return;
          }
        });
    }
  }

  transform() {
    const teste = this.sanitizer.bypassSecurityTrustResourceUrl(this.base64FirstImage);
    return teste;
  }

  transformImage(index) {
    const image = this.productDetails ? `data:image/png;base64, ${this.productDetails.imagens[index]}` : './../../../../../assets/img/nao-disponivel.jpg';
    const teste = this.sanitizer.bypassSecurityTrustResourceUrl(image);
    return teste;
  }

  get isProductTypeService(): boolean {
    return this.productType === 'service' ? true : false;
  }

  get productFirstImg() {
    return this.productDetails ? `data:image/png;base64, ${this.productDetails.imagens[0]}` : './../../../../../assets/img/nao-disponivel.jpg';
  }

}
