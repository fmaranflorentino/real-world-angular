import { Component, OnInit } from '@angular/core';

import { bannerOptions, differentialOptions, productsOptions, storesOptions } from './carousel-options';
import { Options } from 'ng5-slider';
import { MatDialog } from '@angular/material';
import { LoginModalComponent } from 'src/app/shared/components/login-modal/login-modal.component';
import { ModalService } from 'src/app/shared/services/modal';

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
    {
      title: 'Simule',
      text: ' Sem compromisso',
      img: './../../../../assets/img/temp/t01.png',
      video: './../../../../assets/videos/steps/sample.mp4'
    },
    { title: 'Escolha', text: 'O produto desejado', img: './../../../../assets/img/temp/t02.png', video: './../../../../assets/videos/steps/sample.mp4' },
    { title: 'Cadastro', text: 'Rápido e poucos passos', img: './../../../../assets/img/temp/t03.png', video: './../../../../assets/videos/steps/sample.mp4' },
    { title: 'Documentos', text: 'Envie tudo online', img: './../../../../assets/img/temp/t04.png', video: './../../../../assets/videos/steps/sample.mp4' },
    { title: 'Análise', text: 'Seu pedido analisado em até 24hrs', img: './../../../../assets/img/temp/t05.png', video: './../../../../assets/videos/steps/sample.mp4' },
    { title: 'Assine', text: 'Tudo online e receba o produto em casa', img: './../../../../assets/img/temp/t06.png', video: './../../../../assets/videos/steps/sample.mp4' },
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
    { icon: 'assets/img/svg/home01.svg', title: '1.000.000', desc: 'Clientes já cadastrados' },
    { icon: 'assets/img/svg/home02.svg', title: '15.000', desc: 'Pontos de venda' },
    { icon: 'assets/img/svg/home03.svg', title: 'R$ 10.000.000', desc: 'Economizados anualmente por nossos clientes' }
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

  constructor(public dialog: MatDialog, private modal: ModalService) { }

  ngOnInit() {
    // this.openDialog();
  }

  toggleSelectedStep(step): void {
    this.stepByStepSelected = { ...step };
  }

  openDialog(): void {
    const dialogRef = this.modal.open(LoginModalComponent, { width: '570px' });
  }

}
