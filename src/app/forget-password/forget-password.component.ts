import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public otp:boolean = true;

  public password:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onOtpSubmit(){
    this.otp = false;
    this.password = true;
  }
}
