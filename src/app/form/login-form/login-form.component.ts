import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { AuthguardService } from '../../service/authguard.service';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Users } from '../../TypeDefs/users';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  allUsers: Users[] = [];
  @Output() isloggedin = new EventEmitter<any>();
  returnUrl: any;
  logintdf = {
    email: '',
    password: '',
  };

  constructor(
    private auth: AuthguardService,
    private router: Router,
    private route: ActivatedRoute,
    private http:HttpClient
  ) {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/profile']);
    }
  }


  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http
      .get<{ [key: string]: Users }>(
        'https://mern-project-a9f3d-default-rtdb.firebaseio.com/users.json'
      )
      .pipe(
        map((res) => {
          const userss = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              userss.push({ ...res[key], id: key });
            }
          }
          return userss;
        })
      )
      .subscribe((userss) => {
        this.allUsers = userss;
        console.log("allUsers", this.allUsers)
      });
  }

  btnSubmit(userForm: any) {
    console.log('userForm', userForm);
    console.log('userFormfdf', this.logintdf);
    this.auth
      .login(this.logintdf.email, this.logintdf.password)
      .subscribe((res) => {
        if (res.status == 200) {
          this.isloggedin.emit(true);
          this.returnUrl =
            this.route.snapshot.queryParams['returnUrl'] || '/profile';
          console.log('returnUrl', this.returnUrl);
          this.router.navigate([this.returnUrl]);
        }
      });
  }
  
}
