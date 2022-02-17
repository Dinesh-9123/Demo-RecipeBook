import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm:FormGroup;

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.changePasswordForm = new FormGroup({
      'email':new FormControl('',Validators.required),
      'currentPassword': new FormControl('',Validators.required),
      'newPassword': new FormControl('',Validators.required),
      'conformPassword':new FormControl('',Validators.required)
    })
  }
  onSubmit(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Password Successfully Changed',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigateByUrl('/recipes');
  }
}
