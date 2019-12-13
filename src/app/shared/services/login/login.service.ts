import { Injectable } from '@angular/core';

import { LoginInterface } from './login-interface';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../api';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends LoginInterface {

  constructor(
    private api$: ApiService,
    private auth$: AuthService
  ) {
    super();
  }

   login(): Observable<any> {
     return this.api$.post('', {});
   }

   logOut(): Observable<any> {
    return this.api$.post('', {});
  }

   registerCredentials(): Promise<any> {
     return this.auth$.registerTokens();
   }
}
