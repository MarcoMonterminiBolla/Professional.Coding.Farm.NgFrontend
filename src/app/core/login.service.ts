import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token           : any        = "";
  isLoggedFlag    = false;
  errorloginFlag   = false;
  UserUsername    = "";
  loggedin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private api: ApiService) {
    this.loggedin.next(true);
    // if (localStorage.getItem("token")) {
    //   this.token = localStorage.getItem("token");
    //   this.isLoggedFlag = true;
    //   this.loggedin.next(true);
    // }
   }

   public getToken(): string {
    return this.token;
   }

   Login(loginDto : any) : Observable<boolean> {
    this.errorloginFlag = false;
    const retVal = new Subject<boolean>();
    //Fake login
    this.token="IntesiToken";
    this.UserUsername="Admin";
    if (loginDto.RememberMe) {
      localStorage.setItem("token", this.token);
    }
    retVal.next(true);
    this.loggedin.next(true)
    // this.api.login(loginDto).subscribe(
    //     response => {
    //       this.token = response.data.token;
    //       this.UserUsername = loginDto.Username;
    //       if (loginDto.RememberMe) {
    //         localStorage.setItem("token", this.token);
    //       }
    //       retVal.next(true);
    //       this.loggedin.next(true);
    //     },
    //       err => {
    //       if (err.status === 401) {
    //         this.errorloginFlag = true;
    //         retVal.next(false);
    //       }
    //     }
    //   );

    return retVal;
   }

   Logout() {
      this.isLoggedFlag = false;
      this.token = null;
      localStorage.removeItem("token");
      this.loggedin.next(false);
   }
}
