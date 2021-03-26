import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './core/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Custom-Portal-Template';
  constructor (private router: Router, private login :LoginService) {
    this.login.loggedin.subscribe(res => {
      if(res) this.router.navigateByUrl("home");
      else this.router.navigateByUrl("#");
    })
  }
}
