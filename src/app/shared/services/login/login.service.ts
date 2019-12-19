import { Injectable } from '@angular/core';

import { LoginInterface } from './login-interface';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../api';

import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends LoginInterface {
  baseUrl = env.api.basePath;

  constructor(
    private api$: ApiService,
    private auth$: AuthService
  ) {
    super();
  }

   logIn(body: { user: string, password: string, system?: string }): Observable<any> {
     body.system = 'AD';
     const url = `${this.baseUrl}${env.api.domains.auth.login}`;
     return this.api$.post(url, body);
   }

   logOut(): Observable<any> {
    return this.api$.post('', {});
  }

   registerCredentials(): Promise<any> {
     return this.auth$.registerToken('token');
   }
}
