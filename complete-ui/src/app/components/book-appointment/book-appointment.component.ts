// import { createInjectableType } from '@angular/compiler';

import { Component, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AvailabilityService } from '../patient/availability.service';
import { Schedule } from 'src/app/schedule';
import { Router } from '@angular/router';
import { localStorageToken } from '../patient/show-doctors/localstorage.token';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookAppointmentComponent>, private schedule: AvailabilityService, 
    private route: Router, @Inject(localStorageToken) private localStorage : any) { }

  // @Output() doctorIds = new EventEmitter();

  passDoctorIds() {
    // this.doctorIds.emit(this.schedules);
    this.route.navigate(['show-doctors']);
  }


  selectedDay !: string;

  
  i !: number
  ipdate: Date = new Date();
  dates !: Date[];
  show = false;
  schedules: Schedule[] = [];

  ngOnInit() {
    if (this.show == false)
      this.show = true
    else
      this.show = false

    this.dates = []
    for (this.i = 0; this.i <= 6; this.i++) {
      this.ipdate = new Date(this.ipdate.getTime() + 86400000)
      this.dates.push(this.ipdate);
    }
    console.log(this.dates);
    this.ipdate = new Date();
  }

  fetch() {
    this.schedule.GetDaySchedule(this.selectedDay).subscribe((data) => {
      this.schedules = data.sort();
      console.log(this.schedules);
    })

  }

  valChange(event: any) {
    console.log(event.value);
    this.selectedDay = event.value;
    console.log(this.selectedDay);
    this.localStorage.setItem('selectedDay', this.selectedDay);
  }

  
  }

