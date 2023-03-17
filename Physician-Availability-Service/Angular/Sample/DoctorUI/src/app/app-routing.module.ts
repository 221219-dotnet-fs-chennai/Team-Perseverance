import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppointmentRequestsComponent } from './appointment-requests/appointment-requests.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  // { path : 'apponitments', component : AppointmentRequestsComponent},
  {path: 'notifications', component:NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [AppointmentRequestsComponent]
