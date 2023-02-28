import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { AuthguardService } from '../../service/authguard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  constructor(
    private auth: AuthguardService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/profile']);
    }
  }

  logintdf = {
    email: '',
    password: '',
  };

  ngOnInit() {
    if (!localStorage.getItem('refresh')) { 
      localStorage.setItem('refresh', 'no reload'); 
      setTimeout(function(){;
      location.reload(); 
    },2000)
    } else {
      localStorage.removeItem('refresh') 
    }
  }

  @Output() isloggedin = new EventEmitter<any>();

  returnUrl: any;

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
