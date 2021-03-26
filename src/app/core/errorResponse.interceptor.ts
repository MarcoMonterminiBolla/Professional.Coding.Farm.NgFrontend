import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import notify from 'devextreme/ui/notify';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';

@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {

    constructor(
        @Inject(LoginService) private _authServ : LoginService,
        @Inject(Router) private _router : Router,
        @Inject(ConfigService) private _configServ : ConfigService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe( tap(
          event => {},
          err => {
            if (err instanceof HttpErrorResponse) {
              if (err.status == 401) {
                this._authServ.Logout();
                this._router.navigateByUrl('login');
              } else if (err.status == 0) {
                notify({ message: 'Errore inaspettato, Codice:0 Connection refused', width: '100%', position: 'top' , animation: null }, 'error', this._configServ._errorTimeout);
              } else if (err.status == 403) {
                notify({ message: 'Errore inaspettato, Codice:403 Forbidden', width: '100%', position: 'top' , animation: null }, 'error', this._configServ._errorTimeout);
              } else if (err.status == 404) {
                notify({ message: 'Errore inaspettato, Codice:404 not found', width: '100%', position: 'top' , animation: null }, 'error', this._configServ._errorTimeout);
              } else if (err.status == 500) {
                notify({ message: 'Errore inaspettato, Codice:500 Connection error', width: '100%', position: 'top' , animation: null }, 'error', this._configServ._errorTimeout);
              } else if (err.status == 503) {
                notify({ message: 'Errore inaspettato, Codice:503 Service Unavailable', width: '100%', position: 'top' , animation: null }, 'error', this._configServ._errorTimeout);
                console.log('');
              }
            }
        }));
    }
 }
