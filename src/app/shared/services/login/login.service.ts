import { Injectable } from '@angular/core';

import { LoginInterface } from './login-interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends LoginInterface {

  constructor() { 
    super();
  }

   login() {}

   logOut() {}

   registerCredentials() {}
}
