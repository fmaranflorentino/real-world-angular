import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { faExclamation, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { listOpacity } from 'src/app/shared/helpers/animations';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss'],
  animations: [  listOpacity ]
})
export class MyProductsComponent implements OnInit {
  @Output()
  toggleIsnewProduct: EventEmitter<boolean> = new EventEmitter();
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

  toggleNewProduct(): void {
    this.toggleIsnewProduct.emit(true);
  }

}
