import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted: boolean=false;

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = new FormGroup({
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required),
      'checkbox':new FormControl('',Validators.required)
    })
  } 
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loginForm.markAsTouched();
      return;
    }
    else{
      this.router.navigateByUrl('/recipes');
    }
  }
 
}
