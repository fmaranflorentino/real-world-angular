import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  bannerOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 1,
    dotsSpeed: 500,
    dots: true,
    smartSpeed: 400,
    dragEndSpeed: 350,
    nav: false
  };
  indicators = [
    { icon: 'assets/img/icon1.png', title: 'Descontos', desc: 'Tenha acesso aos melhores descontos' },
    { icon: 'assets/img/icon1.png', title: 'Bolsas de estudos', desc: 'Em cursos de graduação, pós e muito mais!' }
  ];
  leadBannerItems = [
    {
      title: 'Financiamento rápido para você comprar agora',
      desc: ' Compre pelo nosso site o Market Club financia suas compras com menor taxa de juros do mercado.'
    },
    {
      title: 'Beneficios rápidos para você comprar agora',
      desc: ' Compre pelo nosso site o Market Club financia suas compras com menor taxa de juros do mercado.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
