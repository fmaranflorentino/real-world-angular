import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  collection = [];
  
  constructor() { 
    for (let i = 1; i <= 50; i++) {
      this.collection.push('item ${i}');
    }
  }

  ngOnInit() {
  }

}
