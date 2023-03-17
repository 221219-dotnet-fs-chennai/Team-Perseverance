import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HealthinfoComponent } from './healthinfo/healthinfo.component';
import { LoginComponent } from './login/login.component';
import { PatientMedicationComponent } from './patient-medication/patient-medication.component';
import { PatientbasicrecordComponent } from './patientbasicrecord/patientbasicrecord.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  
{path:'',component:RegisterComponent},

{
  path:'login',component:LoginComponent
},
{
  path:'register',component:RegisterComponent
},

{
  path:'patientbasicrecord',component:PatientbasicrecordComponent
},
{
  path:'patient-medication',component:PatientMedicationComponent
}, 
{
  path:'dashboard',component:DashboardComponent
},
{
  path:'healthinfo',component:HealthinfoComponent
},
{
  path:'profile',component:ProfileComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
