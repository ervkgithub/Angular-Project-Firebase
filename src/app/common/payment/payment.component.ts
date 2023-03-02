import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  constructor(private _formBuilder: FormBuilder) {}
  isLinear = false;
  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    landmark: ['', Validators.required],
    pincode: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    cardname: ['', Validators.required],
    cardnumber: ['', Validators.required],
    cvv: ['', Validators.required],
    expmonth: ['', Validators.required],
    expyear: ['', Validators.required],
    pincode: ['', Validators.required],
  });
}
