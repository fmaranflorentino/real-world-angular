import { Observable } from 'rxjs';

export abstract class LoginInterface {

    constructor() { }

    abstract logIn();

    abstract logOut();
    
    abstract registerCredentials();
}