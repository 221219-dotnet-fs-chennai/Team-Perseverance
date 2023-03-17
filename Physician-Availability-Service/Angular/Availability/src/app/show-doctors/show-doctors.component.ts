import { Component, OnInit, Inject } from '@angular/core';
import { Schedule } from '../app.component';
import { AvailabilityService } from '../availability.service';
import { localStorageToken } from '../localstorage.token';

@Component({
  selector: 'app-show-doctors',
  templateUrl: './show-doctors.component.html',
  styleUrls: ['./show-doctors.component.css']
})
export class ShowDoctorsComponent implements OnInit {

  constructor(private schedule: AvailabilityService, @Inject(localStorageToken) private localStorage : any) {}
  schedules : Schedule[] = [] 
  getDoctorIds(event : Schedule[]) {
    event.forEach(ele => this.schedules.push(ele));
  }

  ngOnInit(): void {
    this.schedule.GetDaySchedule(this.localStorage.getItem('selectedDay')).subscribe((data) => {
      this.schedules = data.sort();
      console.log(this.schedules);
    })
  }
}
