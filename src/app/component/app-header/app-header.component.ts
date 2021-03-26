import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AppHeaderService } from './app-header.service';
import { ConfigService } from 'src/app/core/config.service';
import { LoginService } from 'src/app/core/login.service';
import { Subscription, timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit,OnDestroy {
  public title = "Accademy Elfo-Intesi";
  public principalTitle =  "Accademy Elfo-Intesi"; // modify with project title
  // public homeClassDropDownItem =  ["Logout"];
  public homeClassDropDownItem =  ["Info"];
  public username        = "";
  public currentDateTime = "";
  private UpdateCurrentDatetime : Subscription;
  constructor(
    public router : Router,
    public appheaderservice: AppHeaderService,
    public config : ConfigService,
    private cdRef: ChangeDetectorRef,
    public loginService : LoginService) {
     }

  ngOnDestroy(): void {
      if (this.UpdateCurrentDatetime) {
       this.UpdateCurrentDatetime.unsubscribe();
     }
   }
  
   ngOnInit() {
    this.username = this.loginService.UserUsername;
    this.appheaderservice.subject.subscribe(x => {this.changeHeaderTitle(x); });
    this.UpdateCurrentDatetime = timer(0, 1000).subscribe(() =>  {
      let date = new Date();
      let hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
      let minutes = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
      let seconds =  date.getSeconds() > 9 ?  date.getSeconds() : "0" +  date.getSeconds();
      this.currentDateTime = hours + ":" + minutes + ":" + seconds;
    });
  }

  public changeHeaderTitle(string) {
    if (string != "") {
      this.title = string;
      this.cdRef.detectChanges();
    } else
      this.title = this.principalTitle;
  }

  onItemClick(e) {
    if (e.itemData == "Logout") {
      this.loginService.Logout();
    } else if(e.itemData == "Info") alert("Accademy Elfo-Intesi");
  }

  navigateHome() {
    this.router.navigateByUrl("home");
  }
}
