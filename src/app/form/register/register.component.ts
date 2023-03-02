import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registrationData: any;
  @ViewChild('loginform') formData: any;
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  userFormFB = this.fb.group({
    name: ['', [Validators.required]],
  });

  get fbData() {
    return this.userForm.controls;
  }

  submitForm() {
    this.registrationData = this.userForm.value;
    console.log('registrationData', this.registrationData);
    if (this.registrationData.name != "" ||this.registrationData.email != "" || this.registrationData.age != "" || this.registrationData.mobile != "" || this.registrationData.password ) {
      this.http
        .post(
          'https://mern-project-a9f3d-default-rtdb.firebaseio.com/users.json',
          this.registrationData
        )
        .subscribe((res) => {
          if (res) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Amazing!',
              text: 'Registration Successful!',
              showConfirmButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                this.userForm.reset();
                this.router.navigate(['/users']);
              }
            });
          }
        });
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oops..!!',
        text: 'Please fill all required field!'
      })
    }
  }
}
