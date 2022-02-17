import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public signUpform:FormGroup;
  submitted: boolean=false;

  constructor(private router:Router) { }

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
  get f() {
    return this.signUpform.controls;
  }


  onSubmit(){
    this.submitted = true;
    if (this.signUpform.invalid) {
      this.signUpform.markAsTouched();
      return;
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }




}
