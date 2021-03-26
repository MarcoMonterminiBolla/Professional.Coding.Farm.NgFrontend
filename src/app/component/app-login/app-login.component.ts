import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/login.service';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { ConfigService } from 'src/app/core/config.service';
@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  CheckboxRememberMe = false;
  passworderror : boolean;
  public loginDto : {
    Username    : string,
    Password    : string,
    RememberMe  : boolean,
  } = {
    Username : "",
    Password: "",
    RememberMe: false
  };
  constructor(private loginservice: LoginService, public router: Router  , public config : ConfigService) {
   }

  ngOnInit() {
    if (this.loginservice.isLoggedFlag) {
      this.router.navigateByUrl("home");
    }
  }
  Login() {
    localStorage.removeItem("technicianBusinessTripCode");
    // tslint:disable: triple-equals
    this.loginDto.Username == "" ?
      notify({ message: "Inserire username", width: '100%', position: 'top' , animation: null }, "error", this.config._errorTimeout) : 
      this.loginservice.Login(this.loginDto).subscribe(res => {
        if (!res) {
          notify({ message: "Username o password sbagliati", width: '100%', position: 'top' , animation: null }, "error", this.config._errorTimeout);
      } });
  }

  public TextBoxSetFocusOnInit(e) {
    // tslint:disable-next-line: only-arrow-functions
    setTimeout(function() {
      e.component.focus();
    }, 0);
  }
  error(): boolean {
    return this.passworderror = true;
  }

  onKeyDown(e) {
    if (e.event.keyCode == 13) {
      setTimeout(() => {
        this.Login();
      }, 0);
    }
  }
}
