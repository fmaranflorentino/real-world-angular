import { Injectable } from '@angular/core';

import { LoginInterface } from './login-interface';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../api';

import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Login } from '../../interfaces/login';
import { LoginResponse } from './login-response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends LoginInterface {
  baseUrl = env.api.basePathLogin;

  constructor(
    private api$: ApiService,
    private auth$: AuthService
  ) {
    super();
  }

   logIn(body: Login): Observable<LoginResponse> {
     const url = `${this.baseUrl}${env.api.domains.auth.login}/b2c`;

     return this.api$.post(url, body);
   }

   logOut(): Observable<any> {
    return this.api$.post('', {});
  }

   registerCredentials(token: string): Promise<any> {
     return this.auth$.registerToken(token);
   }
}
