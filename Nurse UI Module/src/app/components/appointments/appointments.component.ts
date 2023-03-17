import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  longText='string'
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  appointments:appointmentdetails[] = [{
    name:"ajaz",
    details:"good"
  },
  {
    name:"cb",
    details:"good"
  }
]




}

export interface appointmentdetails{
  name : string,
  details : string

}
