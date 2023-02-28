import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  @ViewChild('loginform') formData:any;
  userForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl('')
    }),
  });
  constructor(private fb: FormBuilder){}
  userFormFB = this.fb.group({
    name:['', [Validators.required]],
  })

  get fbData() {
    return this.userForm.controls;
  }

  submitForm() {
    console.log('userForm', this.userForm.value);
  }
}
