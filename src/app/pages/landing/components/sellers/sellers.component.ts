import { Component, OnInit } from '@angular/core';

import { fadeIn, scaleOut, scaleIn } from 'src/app/shared/helpers/animations';
import { wait } from 'src/app/shared/helpers/ui.helper';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss'],
  animations: [ fadeIn, scaleOut, scaleIn ]
})
export class SellersComponent implements OnInit {
  firstStep = true;
  secondStep = false;

  constructor() { }

  ngOnInit() {
  }

  toggleStep(): void {
    this.firstStep = !this.firstStep;

    wait(498)
      .then(() => this.secondStep = !this.firstStep);

  }

}
