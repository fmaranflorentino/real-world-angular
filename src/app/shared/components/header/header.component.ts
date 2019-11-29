import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../../helpers/animations';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ fadeIn ],
})
export class HeaderComponent implements OnInit {
  faHeart = faHeart;

  constructor() { }

  ngOnInit() {
  }

}
