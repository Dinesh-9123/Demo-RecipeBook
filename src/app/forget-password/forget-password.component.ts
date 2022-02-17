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

  onOtpSubmit(){
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

  onSavePassword(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Password Successfully Changed',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigateByUrl('/recipes');
  }
}
