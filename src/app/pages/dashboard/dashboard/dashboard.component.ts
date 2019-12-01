import { Component, OnInit } from '@angular/core';

import { faChevronRight, faExclamation, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { listStateTrigger, fadeIn } from 'src/app/shared/helpers/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ listStateTrigger, fadeIn ]
})
export class DashboardComponent implements OnInit {
  faChevronRight = faChevronRight;
  faExclamation = faExclamation;
  faCheck = faCheck;
  faPlus = faPlus;
  menuItems: { title: string, text: string }[] = [
    { title: 'Meus produtos', text: 'Veja todos os seus produtos cadastrados' },
    { title: 'Meus dados', text: 'Veja e edite suas informações' },
    { title: 'Alterar senha', text: 'Altera a senha da sua conta' },
    { title: 'Financiamento em proocesso', text: 'Confira informações de financiamento' },
    { title: 'Minhas vendas', text: 'Visualize seu histórico de vendas' },
  ];
  showEffects: boolean;
  selectedItem = this.menuItems[0];

  products = [
    { id: 234234423, name: 'BMW Série 2 Sedã', status: 'pending'  },
    { id: 45877878, name: 'Geladeira/Refrigerador', status: 'active'  },
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showEffects = true;
    }, 500);
  }

  toggleActiveItem(item: { title: string, text: string }) : void {
    this.selectedItem = item;
  }

}
