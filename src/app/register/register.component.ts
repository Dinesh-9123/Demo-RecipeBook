import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public signUpform:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signUpform = new FormGroup({
      'email': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      'confrimPassword': new FormControl('',Validators.required),
    })
  }
}
