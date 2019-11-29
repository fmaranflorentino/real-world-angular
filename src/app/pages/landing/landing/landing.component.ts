import { Component, OnInit } from '@angular/core';

import { bannerOptions, differentialOptions, productsOptions, storesOptions } from './carousel-options';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  bannerOpts = bannerOptions;
  differentialOpts = differentialOptions;
  productsOpts = productsOptions;
  storesOpts = storesOptions;


  steps = [
    { title: 'Simule', text: ' Sem compromisso' },
    { title: 'Simule2', text: ' Sem compromisso' },
    { title: 'Simule', text: ' Sem compromisso' },
    { title: 'Simule', text: ' Sem compromisso' },
    { title: 'Simule', text: ' Sem compromisso' },
    { title: 'Simule', text: ' Sem compromisso' },
    { title: 'Simule', text: ' Sem compromisso' },
    { title: 'Simule', text: ' Sem compromisso' },
  ];


  stepByStepSelected = this.steps[0];

  value = 100;
  options: Options = {
    floor: 1000,
    ceil: 500000
  };

  options2: Options = {
    floor: 12,
    ceil: 48
  };

  indicators = [
    { icon: 'assets/img/icon1.png', title: '1.000.000', desc: 'Clientes já cadastrados' },
    { icon: 'assets/img/icon1.png', title: '15.000', desc: 'Pontos de venda' },
    { icon: 'assets/img/icon1.png', title: 'R$ 10.000.000', desc: 'Economizados anualmente por nossos clientes' }
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

  toggleSelectedStep(step: {title: string, text: string}): void {
    this.stepByStepSelected = {...step};
  }

}
