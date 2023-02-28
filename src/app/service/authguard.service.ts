import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Injectable({
  providedIn: 'root',
})
export class AuthguardService {
  fakeusername = 'admin';
  fakepassword = 'admin';

  constructor() {}

  login(email: any, password: any) {
    if (email == this.fakeusername && password == this.fakepassword) {
      localStorage.setItem('token', '1234567890');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Wow...',
        text: 'Login Successful!',
        showConfirmButton: true,
        timer: 1000
      })
      return of(new HttpResponse({ status: 200 }));
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email or Password is not correct!',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
      });
      return of(new HttpResponse({ status: 401 }));
    }
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }
}
