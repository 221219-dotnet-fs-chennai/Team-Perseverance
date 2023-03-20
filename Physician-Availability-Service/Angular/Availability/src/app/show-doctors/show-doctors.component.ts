import { Component, OnInit, Inject } from '@angular/core';
import { Schedule } from '../app.component';
import { AvailabilityService } from '../availability.service';
import { localStorageToken } from '../localstorage.token';
import { BookingAlertComponent } from '../booking-alert/booking-alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-show-doctors',
  templateUrl: './show-doctors.component.html',
  styleUrls: ['./show-doctors.component.css']
})
export class ShowDoctorsComponent implements OnInit {

  constructor(private schedule: AvailabilityService, @Inject(localStorageToken) private localStorage : any,
   public dialog: MatDialog) {}
  schedules : Schedule[] = [] 
  
  // getDoctorIds(event : Schedule[]) {
  //   event.forEach(ele => this.schedules.push(ele));
  // }

  ngOnInit(): void {
    this.schedule.GetDaySchedule(this.localStorage.getItem('selectedDay')).subscribe((data) => {
      this.schedules = data.sort();
      console.log(this.schedules);
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(BookingAlertComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
