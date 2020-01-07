import { Component, OnInit } from '@angular/core';

import { CacheService } from '../../services/cache/cache.service';
import { ModalService } from '../../services/modal';

import { LoginModalComponent } from '../login-modal/login-modal.component';

import { fadeIn } from '../../helpers/animations';
import { faHeart, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeIn],
})
export class HeaderComponent implements OnInit {
  faHeart = faHeart;
  faAngleDown = faAngleDown;
  favoritos = [];
  isUserLoggedIn: boolean;
  isUserLoggedInSub = new Subscription();
  userInformation;

  constructor(
    private cacheService: CacheService,
    private modal: ModalService,
    private auth$: AuthService,
  ) { }

  ngOnInit() {
    this.favoritos = this.cacheService.getStorage('favoritos');
    this.verifyIsUserLoggedIn();
  }

  verifyIsUserLoggedIn() {
    this.isUserLoggedInSub = this.auth$.getIsUserLoggedIn()
      .subscribe((response: boolean) => {
        this.isUserLoggedIn = response;

        if (response) {
          this.userInformation = this.auth$.getUserInformation();
        }
      });
  }

  openLoginDialog(): void {
    const dialogRef = this.modal.open(LoginModalComponent, { width: '570px' });
  }

  logout() {
    this.auth$.logout();
  }

}
