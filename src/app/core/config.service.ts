import { Injectable } from '@angular/core';

declare let apiAddress: any;
declare let errorTimeout: any;

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public backendURL = this.getServerHost();
  public _errorTimeout = this.getPWAtimeout();

  private getServerHost(): string {
    if (!window.hasOwnProperty('apiAddress')) {
      return 'http://localhost:64938/api';
     // TODO:: rewrite return of this method with the backend url when it is ready
    }
    return apiAddress ;
  }

  private getPWAtimeout() : number {
    if (!window.hasOwnProperty('timeout')) {
      return 3500;
    }
    return errorTimeout * 1000;
  }
}
