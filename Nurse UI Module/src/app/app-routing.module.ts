import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';
import { UpdateinfoComponent } from './components/updateinfo/updateinfo.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent
  },
  {
    path:'update',
    component:UpdateinfoComponent
  },
  {
    path:'history',
    component:PatientHistoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
