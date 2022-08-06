import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'doctors',
        component: DoctorsComponent
      },
      {
        path: 'hospitals',
        component: HospitalsComponent
      },
      {
        path: '**',
        redirectTo: 'users'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
