import { Component } from '@angular/core';
import { Appointment } from '../notification/notification.component';

@Component({
  selector: 'app-appointment-requests',
  templateUrl: './appointment-requests.component.html',
  styleUrls: ['./appointment-requests.component.css']
})
export class AppointmentRequestsComponent {
  
  
  // viewSidebar = true;

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
