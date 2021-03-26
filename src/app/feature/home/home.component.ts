import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppHeaderService } from 'src/app/component/app-header/app-header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(public router : Router, public header : AppHeaderService) {
    
   }
  ngAfterViewInit(): void {
    this.header.ChangeHeaderSubtitle("Home");
  }

  ngOnInit(): void {
  }


  public routingOut(string: any) {
    this.router.navigateByUrl(string);
  }
}
