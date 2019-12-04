import { Component, OnInit } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { listStateTrigger, listOpacity, fadeIn } from 'src/app/shared/helpers/animations';

import { wait } from 'src/app/shared/helpers/ui.helper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ listStateTrigger, listOpacity, fadeIn ],
})
export class DashboardComponent implements OnInit {
  faChevronRight = faChevronRight;
  menuItems: { title: string, text: string }[] = [
    { title: 'Meus produtos', text: 'Veja todos os seus produtos cadastrados' },
    { title: 'Meus dados', text: 'Veja e edite suas informações' },
    { title: 'Alterar senha', text: 'Altera a senha da sua conta' },
    { title: 'Financiamentos em processo', text: 'Confira informações de financiamento' },
    { title: 'Minhas vendas', text: 'Visualize seu histórico de vendas' },
    { title: 'Meus favoritos', text: 'Veja todos os itens favoritados' },
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

  toggleActiveItem(item: { title: string, text: string }): void {
    this.selectedItem = item;
  }

  toggleNewProduct(): void {
    this.isNewProduct = !this.isNewProduct;
  }

}
