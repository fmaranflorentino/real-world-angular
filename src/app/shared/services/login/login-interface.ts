import { Observable } from 'rxjs';
import { Login } from '../../interfaces/login';
import { LoginResponse } from './login-response.model';

export abstract class LoginInterface {

    constructor() { }

    abstract logIn(body: Login): Observable<LoginResponse>;

    abstract logOut();
    
    abstract registerCredentials(token: string);
}