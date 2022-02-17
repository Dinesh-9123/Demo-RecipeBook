import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public otp:boolean = true;
  public password:boolean = false;
  public otpform:FormGroup;
  public passwordChange:FormGroup;
  submitted: boolean = false;
  submite: boolean= false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initOtp();
    this.passwordChangeF();
  }

  initOtp(){
    this.otpform = new FormGroup({
      'email': new FormControl('',Validators.required),
      'otpNumber': new FormControl('',Validators.required)
    })
  }

  passwordChangeF(){
    this.passwordChange = new FormGroup({
      'newPassword': new FormControl('',Validators.required),
      'conformPassword': new FormControl('',Validators.required)
    })

  }

  get f1() {
    return this.otpform.controls;
  }

  onOtpSubmit(){
    this.submite = true;
    if (this.otpform.invalid) {
      this.otpform.markAsTouched();
      return;
    }
    else{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Otp Match',
        showConfirmButton: false,
        timer: 1500
      })
      this.otp = false;
      this.password = true;
    }
  }

  get f() {
    return this.passwordChange.controls;
  }

  onSavePassword(){
    this.submitted = true;
    if (this.passwordChange.invalid) {
      this.passwordChange.markAsTouched();
      return;
    }
    else{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Password Successfully Changed',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('/login');
    }
  }
}
