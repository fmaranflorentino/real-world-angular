import { Observable } from 'rxjs';
import { Login } from '../../interfaces/login';

export abstract class LoginInterface {

    constructor() { }

    abstract logIn(body: Login);

    abstract logOut();
    
    abstract registerCredentials(token);
}