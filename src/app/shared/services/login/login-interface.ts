import { Observable } from 'rxjs';

export abstract class LoginInterface {

    constructor() { }

    abstract login();

    abstract logOut();
    
    abstract registerCredentials();
}