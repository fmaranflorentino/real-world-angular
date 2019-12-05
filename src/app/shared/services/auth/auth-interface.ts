import { Observable } from 'rxjs';

export abstract class AuthInterface {

    constructor() { }

    abstract registerTokens(): Observable<T>;

    abstract getUserInformation(): Observable<T>;
    
    abstract getIsUserAuthenticated(): Observable<T>;
}