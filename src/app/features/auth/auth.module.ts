import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
