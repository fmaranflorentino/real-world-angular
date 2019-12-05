import { Component, OnInit } from '@angular/core';

import { faExclamation, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { listOpacity } from 'src/app/shared/helpers/animations';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
  animations: [  listOpacity ]
})
export class ProductsTableComponent implements OnInit {
  faExclamation = faExclamation;
  faCheck = faCheck;
  faPlus = faPlus;
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
  }

}
