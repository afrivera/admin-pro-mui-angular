import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../core/services/users.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  hide2 = true;
  signForm : FormGroup;


  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private _router : Router,
    private _snackBar: MatSnackBar
  ) {
    this.signForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['test20@gmail.com', [Validators.required, Validators.email]],
      password: ['1234567', [Validators.required]],
      password2: ['1234567', [Validators.required]],
      accept: [false, [Validators.requiredTrue]]
    })
  }

  ngOnInit(): void {
  }

  register(){
    if(this.signForm.invalid){
      return;
    }

    // create user
    this.userService.createUser( this.signForm.value)
        .subscribe(
          res => {
            if( res ){
              this._router.navigateByUrl('/dashboard')
            } else {
              this.errorSnack();
            }
          }
        )
  }

  
  errorSnack(){
    this._snackBar.open('fields invalid', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
