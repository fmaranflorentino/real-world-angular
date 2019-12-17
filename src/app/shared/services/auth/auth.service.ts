import { Injectable } from '@angular/core';

import { AuthInterface } from './auth-interface';

import * as jwt_decode from 'jwt-decode';

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

  isTokenExpired(token: string) {
    const decodedToken = jwt_decode(token);

    if (decodedToken.exp === undefined) {
      return null;
    }

    const now = new Date(0);
    const transformedTokenExp = now.setUTCSeconds(decodedToken.exp);

    const tokenExp = !(transformedTokenExp.valueOf() > new Date().valueOf());

    return tokenExp;
  }
}
