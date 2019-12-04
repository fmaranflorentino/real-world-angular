import { Component, OnInit } from '@angular/core';
import { faExclamation, faCheck } from '@fortawesome/free-solid-svg-icons';
import { listOpacity } from 'src/app/shared/helpers/animations';

@Component({
  selector: 'app-salles-history',
  templateUrl: './salles-history.component.html',
  styleUrls: ['./salles-history.component.scss'],
  animations: [listOpacity]
})
export class SallesHistoryComponent implements OnInit {
  faExclamation = faExclamation;
  faCheck = faCheck;
  products = [
    { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
    { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
    { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
    { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
    { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
    { id: 2342354644423, name: 'BMW Série 2 Sedã', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
    { id: 4587754564878, name: 'Geladeira/Refrigerador Brastempo', status: 'active', price: 240000, financing: 240000, parcelas: '24x de de 2.400' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
