import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../helpers/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [ fadeIn ],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
