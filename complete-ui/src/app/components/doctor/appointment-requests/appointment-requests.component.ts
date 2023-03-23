import { Component } from '@angular/core';
import { Appointment } from '../notification/notification.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-requests',
  templateUrl: './appointment-requests.component.html',
  styleUrls: ['./appointment-requests.component.css']
})
export class AppointmentRequestsComponent {

  constructor(private router : Router){}  
  // viewSidebar = true;

  navToDashboard(){
    this,this.router.navigate(['doctor-dashboard'])
  }
  appointments : Appointment[] = [{
    id : "AP-1",
    name : "Hannah",
    gender : "female",
    date : "23/02/2000"
  },
  {
    id : "AP-2",
    name : "Clay",
    gender : "male",
    date : "23/02/2000"
  },
  {
    id : "AP-2",
    name : "Clay",
    gender : "male",
    date : "23/02/2000"
  },
  {
    id : "AP-2",
    name : "Clay",
    gender : "male",
    date : "23/02/2000"
  },
  {
    id : "AP-3",
    name : "Justin",
    gender : "others",
    date : "23/02/2000"
  }]
}
