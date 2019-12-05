import { Observable } from 'rxjs';

export abstract class HttpMethods {

    constructor() { }

    abstract get<T>(url, options?): Observable<T>;

    abstract post<T>(url, body, options): Observable<T>;

    abstract put<T>(url, body, options): Observable<T>;

    abstract patch<T>(url, body, options): Observable<T>;

    abstract delete<T>(url, options): Observable<T>;
}
