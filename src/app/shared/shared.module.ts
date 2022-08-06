import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
