import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDoctorsComponent } from './show-doctors/show-doctors.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';

const routes: Routes = [
  { path:'showDoctors', component: ShowDoctorsComponent},
  { path:'updateSchedule', component : UpdateScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
