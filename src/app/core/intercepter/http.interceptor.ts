import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpRequest, HttpHandler,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const httpOptions = {
      headers: {} as HttpHeaders
    };

    httpOptions.headers = new HttpHeaders()
      .set('Content-Type', 'text/plain'); // application/json

    if (request.url.indexOf('api.imgur') !== -1) {
      httpOptions.headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Client-ID ${environment.imgur_ClientId}`);
    }

    const finalRequest = request.clone(httpOptions);
    return next.handle(finalRequest).pipe(retry(1));
  }
}
