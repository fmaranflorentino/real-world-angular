import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './../services/error/';
import { LoggerService } from './../services/logger/';

@Injectable()
export class ApplicationErrorHandler implements ErrorHandler {
	constructor(private injector: Injector) { }

	handleError(error: Error | HttpErrorResponse) {

		const errorService = this.injector.get(ErrorService);
		const logger = this.injector.get(LoggerService);

		let message;
		let stackTrace;

		if (error instanceof HttpErrorResponse) {
			message = errorService.getServerMessage(error);
			stackTrace = errorService.getServerStack(error);
			logger.logError(message, stackTrace);
		} else {
			message = errorService.getClientMessage(error);
			stackTrace = errorService.getClientStack(error);
			logger.logError(message, stackTrace);
		}

	}
}
