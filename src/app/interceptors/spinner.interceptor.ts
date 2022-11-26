import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse, HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { SpinnerService } from '@app/services/spinner.service';
import { HttpRequestBody } from '@app/model/http-request-body.model';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {
  }

  intercept(request: HttpRequest<HttpRequestBody>, next: HttpHandler): Observable<HttpEvent<HttpEventType>> {
    this.spinnerService.setLoading(true, request.url);
    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.spinnerService.setLoading(false, request.url);
        }
      }, () => {
        this.spinnerService.setLoading(false, request.url);
      }),
      finalize(() => this.spinnerService.setLoading(false, request.url)),
    );
  }
}
