import {
	HttpEvent,
	HttpRequest,
	HttpHandler,
	HttpInterceptor,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class ServerErrorInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		return next.handle(request).pipe(
			retry(1),
			catchError((error: HttpErrorResponse) => {
				return throwError(error);
			})
		);
	}
}