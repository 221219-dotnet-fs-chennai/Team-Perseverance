
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AvailabilityService } from './availability.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { BookAppointmentComponent } from './show-doctors/ChooseDate/book-appointment/book-appointment.component';
//import {DialogOve}


export interface DialogData {
  animal: string;
  name: string;
}

export interface Schedule {
  doctorId : string,
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
  Saturday: number;
  Sunday : number;
}
/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'Availability';
  showButton !: boolean;

  constructor(private available : AvailabilityService, public dialog: MatDialog) { }

  sch !: Schedule;

  mon : number = 0
  tue : number = 0
  wed : number = 0
  thu : number = 0
  fri : number = 0
  sat : number = 0
  sun : number = 0


  ngOnInit() {
    this.showButton = true
  }

  UpdateMon() 
  {
    this.mon = 1
    console.log("Monday updated")
  }
  UpdateTue() 
  {
    this.tue = 1
    console.log("tuesday updated")
  }
  UpdateWed() 
  {
    this.wed = 1
    console.log("wednesday updated")
  }
  UpdateThu() 
  {
    this.thu = 1
    console.log("thursday updated")
  }
  UpdateFri() 
  {
    this.fri = 1
    console.log("friday updated")
  }
  UpdateSat() 
  {
    this.sat = 1
    console.log("saturday updated")
  }
  UpdateSun() 
  {
    this.sun = 1
    console.log("sunday updated")
  }



  UpdateSchedule() {
    let i : string = Guid.create().toString();
    this.sch = {
      doctorId : i,
      Monday: this.mon,
      Tuesday: this.tue,
      Wednesday: this.wed,
      Thursday: this.thu,
      Friday: this.fri,
      Saturday: this.sat,
      Sunday : this.sun
    }
    console.log(this.sch);
    this.available.AddSchedule(this.sch).subscribe(data => console.log(data));
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(BookAppointmentComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    this.showButton = false;
  }

  openAddDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddScheduleComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  schedules : Schedule[] = [{
    doctorId : "string",
    Monday: 1,
    Tuesday: 1,
    Wednesday: 1,
    Thursday: 1,
    Friday: 1,
    Saturday: 1,
    Sunday : 1
  },{
    doctorId : "string",
    Monday: 1,
    Tuesday: 1,
    Wednesday: 1,
    Thursday: 1,
    Friday: 1,
    Saturday: 1,
    Sunday : 1
  }]
  
  
  getDoctorIds(event : Schedule[]) {
    this.schedules = event;
    console.log("App component" + this.schedules);
  }


  i !: number
  
  // ipdate: Date = new Date();
  // dates !: Date[];
  // show = false
  
  // ShowDates() {

  //   if(this.show == false)
  //     this.show = true
  //   else
  //     this.show = false

  //   this.dates = []
  //   for (this.i = 0; this.i <= 6; this.i++) {
  //     this.ipdate = new Date(this.ipdate.getTime() + 86400000)
  //     this.dates.push(this.ipdate);
  //   }
  //   console.log(this.dates);
  //   this.ipdate = new Date();
  // }
}





 // animal: string ='';
  // name: string='';

  // constructor(public dialog: MatDialog) {}

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ScheduleComponent, {
  //     data: {name: this.name, animal: this.animal},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }