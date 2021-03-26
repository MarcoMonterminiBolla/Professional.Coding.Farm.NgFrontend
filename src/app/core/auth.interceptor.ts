import { Injectable,  Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { ApiService } from './api.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor( @Inject(ApiService) private _apiSer : ApiService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._apiSer.getAuthToken();
    if (!isNullOrUndefined(token))
      req = req.clone({headers: req.headers.set('Authorization', token)});
    return next.handle(req);
  }
}
