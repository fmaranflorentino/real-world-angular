import { Component, OnInit } from '@angular/core';
import { listStateTrigger } from '../../helpers/animations';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [ listStateTrigger ]
})
export class CategoriesComponent implements OnInit {
  categoriesList = [
    { title: 'Todos' },
    { title: 'Acessórios' },
    { title: 'Decoração' },
    { title: 'Moda' },
    { title: 'Viagens' },
    { title: 'Veículos' },
    { title: 'Promoção' },
    { title: 'Novidades' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
