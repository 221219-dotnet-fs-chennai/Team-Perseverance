import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddNurseComponent } from './add-nurse/add-nurse.component';
import { ScheduleDoctorComponent } from './schedule-doctor/schedule-doctor.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';

const routes: Routes = [
  {
    path: '',
    component : ScheduleDoctorComponent

  },
  {
    path : 'add-doctor',
    component : AddDoctorComponent
  },
  {
    path : 'add-nurse',
    component : AddNurseComponent
  },
  {
    path : 'view-patients',
    component : ViewPatientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
