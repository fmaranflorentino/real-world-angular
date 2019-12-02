import { Component, OnInit } from '@angular/core';

import { faChevronRight, faExclamation, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
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
  faExclamation = faExclamation;
  faCheck = faCheck;
  faPlus = faPlus;
  menuItems: { title: string, text: string }[] = [
    { title: 'Meus produtos', text: 'Veja todos os seus produtos cadastrados' },
    { title: 'Meus dados', text: 'Veja e edite suas informações' },
    { title: 'Alterar senha', text: 'Altera a senha da sua conta' },
    { title: 'Financiamento em proocesso', text: 'Confira informações de financiamento' },
    { title: 'Minhas compras', text: 'Visualize seu histórico de compras' },
    { title: 'Meus favoritos', text: 'Veja todos os itens favoritados' },
  ];
  showEffects: boolean;
  selectedItem = this.menuItems[0];

  products = [
    { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending'  },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active'  },
    { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending'  },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active'  },
    { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending'  },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active'  },
    { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending'  },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active'  },
    { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending'  },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active'  },
    { id: 2342354644423, name: 'BMW Série 2 Sedã', status: 'pending'  },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active'  },
  ];

  constructor() { }

  ngOnInit() {
    wait(500)
      .then(() => {
        this.showEffects = true;
      });
  }

  toggleActiveItem(item: { title: string, text: string }) : void {
    this.selectedItem = item;
  }

}
