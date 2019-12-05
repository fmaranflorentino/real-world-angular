import { Injectable } from '@angular/core';

import { AuthInterface } from './auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthInterface {

  constructor() { 
    super()
  }

  registerTokens() {}

  getUserInformation() {}
  
  getIsUserAuthenticated() {}
}
