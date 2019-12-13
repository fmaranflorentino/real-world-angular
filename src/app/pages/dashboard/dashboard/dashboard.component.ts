import { Component, OnInit } from '@angular/core';

import { faChevronRight, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { listStateTrigger, listOpacity, fadeIn, slideInAnimation, routeSlideSide } from 'src/app/shared/helpers/animations';

import { wait } from 'src/app/shared/helpers/ui.helper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ listStateTrigger, listOpacity, fadeIn, slideInAnimation, routeSlideSide ],
})
export class DashboardComponent implements OnInit {
  faChevronRight = faChevronRight;
  faEllipsisV = faEllipsisV;
  menuItems: { routerLink: string, title: string, text: string }[] = [
    { routerLink: 'produtos', title: 'Meus produtos', text: 'Veja todos os seus produtos cadastrados' },
    { routerLink: 'dados', title: 'Meus dados', text: 'Veja e edite suas informações' },
    { routerLink: 'senha', title: 'Alterar senha', text: 'Altera a senha da sua conta' },
    { routerLink: 'financiamentos', title: 'Financiamentos em processo', text: 'Confira informações de financiamento' },
    { routerLink: 'vendas', title: 'Minhas vendas', text: 'Visualize seu histórico de vendas' },
    { routerLink: 'favoritos', title: 'Meus favoritos', text: 'Veja todos os itens favoritados' },
  ];
  showEffects: boolean;
  selectedItem = this.menuItems[0];
  isNewProduct = false;

  constructor() { }

  ngOnInit() {
    wait(500)
      .then(() => {
        this.showEffects = true;
      });
  }

  toggleActiveItem(item: { routerLink: string, title: string, text: string }): void {
    this.selectedItem = item;
  }

  toggleNewProduct(): void {
    this.isNewProduct = !this.isNewProduct;
  }

  getUserInformation(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  getUserProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  getUserFinancing(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

}
