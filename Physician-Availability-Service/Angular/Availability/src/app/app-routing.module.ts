import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDoctorsComponent } from './show-doctors/show-doctors.component';

const routes: Routes = [
  { path:'showDoctors', component: ShowDoctorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
