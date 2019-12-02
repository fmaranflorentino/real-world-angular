import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationErrorHandler } from './handlers/application-error.interceptor';
import { ServerErrorInterceptor } from './handlers/server-error.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: ApplicationErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ],
})
@Optional()
@SkipSelf()
export class CoreModule { }
