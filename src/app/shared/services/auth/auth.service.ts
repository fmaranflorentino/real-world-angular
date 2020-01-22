import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { AuthInterface } from './auth-interface';

import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthInterface {
  isUserLogged = new BehaviorSubject(this.isLoggedIn());

  constructor(private router: Router) {
    super();
  }

  authenticate() {}

  registerToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.setToken(token);

      const userInformation = this.getUserInformation();
      this.setUserInformation(userInformation);
      this.isUserLogged.next(true);
      resolve();
    });
  }

  getToken(): string {
    return localStorage.getItem('_marketclubToken');
  }

  setToken(token: string) {
    localStorage.setItem('_marketclubToken', token);
  }

  getUserInformation() {
    const token: string = this.getToken();
    const undecodedToken = jwt_decode(token);

    return undecodedToken;
  }

  setUserInformation(information) {
    localStorage.setItem('_userInformation', information);
  }

  getIsUserAuthenticated() {
    const token: string = this.getToken();
    return !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    if (!token) {
      return true;
    }

    const undecodedToken = jwt_decode(token);

    if (undecodedToken.exp === undefined) {
      return null;
    }

    const now = new Date(0);
    const transformedTokenExp = now.setUTCSeconds(undecodedToken.exp);

    const tokenExp = !(transformedTokenExp.valueOf() > new Date().valueOf());

    return tokenExp;
  }

  logout() {
    localStorage.removeItem('_marketclubToken');
    this.router.navigate(['/']);
    this.isUserLogged.next(false);
  }

  isLoggedIn() {
    const isLoggedIn = this.getIsUserAuthenticated();

    return isLoggedIn;
  }

  getIsUserLoggedIn(): Observable<any> {
    return this.isUserLogged.asObservable();
  }
}
