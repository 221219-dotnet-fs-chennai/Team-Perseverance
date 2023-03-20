import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  constructor(private router: Router, private auth:AuthService){}
  today = new Date()
  longText='string'
  step = 0;

  ngOnInit(): void {
    this.auth.user$.subscribe((data) => {
      this.nurseName = data?.email?.split("@")[0]
    })
  }
  nurseName !: string | undefined

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  navigateToViewHistory(){
    this.router.navigate(['view-patient-history'])
  }
  navigateToUpdate(){
    this.router.navigate(['update-patient-info'])
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
