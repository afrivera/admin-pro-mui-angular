import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    DoctorsComponent,
    HospitalsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
