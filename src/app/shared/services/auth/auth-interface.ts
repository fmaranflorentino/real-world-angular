import { Observable } from 'rxjs';

export abstract class AuthInterface {

    constructor() { }

    abstract registerToken(token: string);

    abstract getUserInformation(token: string);
    
    abstract getIsUserAuthenticated();
}