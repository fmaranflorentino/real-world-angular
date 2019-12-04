import { Component, OnInit } from '@angular/core';

import { faExclamation, faCheck } from '@fortawesome/free-solid-svg-icons';
import { listOpacity } from 'src/app/shared/helpers/animations';

@Component({
  selector: 'app-financing-processes',
  templateUrl: './financing-processes.component.html',
  styleUrls: ['./financing-processes.component.scss'],
  animations: [ listOpacity ]
})
export class FinancingProcessesComponent implements OnInit {
  faExclamation = faExclamation;
  faCheck = faCheck;
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
