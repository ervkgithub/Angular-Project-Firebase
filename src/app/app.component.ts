import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  spinnerStyle = Spinkit;
  ProductId: any = null;
  loggedin: boolean = false;

  constructor() {
    if (localStorage.getItem('token') != null) {
      this.loggedin = true;
    }
  }

  checkloginstatus(event: any) {
    this.loggedin = event;
  }
}
