import { Component, OnInit } from '@angular/core';

import { CacheService } from '../../services/cache/cache.service';
import { ModalService } from '../../services/modal';

import { LoginModalComponent } from '../login-modal/login-modal.component';

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
  favoritos = [];

  constructor(
    private cacheService: CacheService,
    private modal: ModalService,
    ) { }

  ngOnInit() {
    this.favoritos = this.cacheService.getStorage('favoritos');
  }

  openLoginDialog(): void {
    const dialogRef = this.modal.open(LoginModalComponent, { width: '570px' });
  }

}
