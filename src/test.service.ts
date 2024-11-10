import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  sidebarClass: any = new Subject();

  constructor() {}

  sendData(data: any) {
    this.sidebarClass.next(data);
  }
}
