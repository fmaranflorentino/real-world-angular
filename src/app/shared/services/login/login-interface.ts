import { Observable } from 'rxjs';

export abstract class LoginInterface {

    constructor() { }

    abstract logIn(body);

    abstract logOut();
    
    abstract registerCredentials();
}