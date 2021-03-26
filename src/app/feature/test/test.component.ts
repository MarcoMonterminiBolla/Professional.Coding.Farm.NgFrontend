import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppHeaderService } from 'src/app/component/app-header/app-header.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {
  twoWayBindingText = "Prova valore";
  constructor(public header: AppHeaderService) { }
  ngAfterViewInit(): void {
    this.header.ChangeHeaderSubtitle("Test");
  }

  ngOnInit(): void {
  }
  displayValue() {
    console.log(this.twoWayBindingText);
  }
}
