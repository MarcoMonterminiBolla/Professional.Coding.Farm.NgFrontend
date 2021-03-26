import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _token : any = null;
  url = this.config.backendURL;

  constructor(public config: ConfigService,
              private httpClient: HttpClient  ) { }

  //#region LOGIN
  login(dto: any): any {
    return this.httpClient.post(this.url + '/Users/login', dto);
  }

  logout(): any {
    return this.httpClient.post(this.url + '/users/logout', null);
  }
  //#endregion


  //#region httpHeaderBuilder
    public setHeader(data: any) {
      this._token = data;
    }

    public getAuthToken() : any {
      return !isNullOrUndefined(this._token) ? this._token : localStorage.getItem("token");
    }
  //#endregion
}
