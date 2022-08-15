import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;

  constructor( 
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['test20@gmail.com', [Validators.required, Validators.email]],
      password: ['1234567', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.userService.login( this.loginForm.value )
        .subscribe(resp => {
          if(resp ){
            this.router.navigateByUrl('/dashboard');
          } else {
            alert('there was an error')
          }
        })
  }

}
