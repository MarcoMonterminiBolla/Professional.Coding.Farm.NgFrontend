import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AppHeaderService {
  subject: any = new Subject<string>();
  constructor() { }

  public ChangeHeaderSubtitle(string) {
   this.subject.next(string);
  }
}
