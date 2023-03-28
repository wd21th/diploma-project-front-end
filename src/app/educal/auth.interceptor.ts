import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const uid = localStorage.getItem('uid') || null;
    let authReq;
    if (uid) {
      authReq = request.clone({
        setHeaders: {
          Authorization: uid,
        }
      });
    } else {
      authReq = request.clone();
    }
    return next.handle(uid ? authReq : request);
  }
}
