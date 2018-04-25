import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const reqCloned = req.clone({params: new HttpParams().set('authorization', localStorage.getItem('token'))});
    const reqCloned = req.clone({setHeaders: {Authorization: localStorage.getItem('token') ? localStorage.getItem('token') : ''}});
    return next.handle(reqCloned);
  }
}