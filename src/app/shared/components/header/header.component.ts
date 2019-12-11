import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../../helpers/animations';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CacheService } from '../../services/cache/cache.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ fadeIn ],
})
export class HeaderComponent implements OnInit {
  faHeart = faHeart;
  favoritos = [];
  constructor(private cacheService: CacheService) { }

  ngOnInit() {
    this.favoritos = this.cacheService.getStorage('favoritos');
    console.log(favoritos);
  }

}
