import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;

  constructor( private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['correo@correo.com', [Validators.required, Validators.email]],
      password: ['12345', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value)
  }

}
