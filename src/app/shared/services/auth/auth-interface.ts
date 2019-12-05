import { Observable } from 'rxjs';

export abstract class AuthInterface {

    constructor() { }

    abstract registerTokens();

    abstract getUserInformation();
    
    abstract getIsUserAuthenticated();
}