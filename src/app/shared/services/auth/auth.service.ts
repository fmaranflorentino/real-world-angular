import { Injectable } from '@angular/core';

import { AuthInterface } from './auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthInterface {

  constructor() {
    super();
  }

  authenticate() {}

  registerToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.setToken(token);
      resolve();
    });
  }

  getToken(): string {
    return localStorage.getItem('_marketclubToken');
  }

  setToken(token: string) {
    localStorage.setItem('_marketclubToken', token);
  }

  getUserInformation() {}

  getIsUserAuthenticated() {}

  isTokenExpired() {}
}
