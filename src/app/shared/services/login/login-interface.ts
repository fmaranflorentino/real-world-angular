import { Observable } from 'rxjs';

export abstract class LoginInterface {

    constructor() { }

    abstract login(): Observable<T>;

    abstract logOut(): Observable<T>;
    
    abstract registerCredentials(): Observable<T>;
}