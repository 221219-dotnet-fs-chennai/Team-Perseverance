import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../app.component';
import { AvailabilityService } from '../availability.service';

@Component({
  selector: 'app-get-schedule',
  templateUrl: './get-schedule.component.html',
  styleUrls: ['./get-schedule.component.css']
})
export class GetScheduleComponent implements OnInit{

  constructor(private schedule : AvailabilityService) {}
  ngOnInit(): void {
    
  }

  fetch(){
    this.schedule.GetDaySchedule(this.selectedDay).subscribe((data) => {
      this.schedules = data;
      console.log(this.schedules);
    })
  }

  
  
  i !: number
  
  ipdate: Date = new Date();
  dates !: Date[];
  show = false
  
  ShowDates() {

    if(this.show == false)
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

  selectedDay !: string
  
  valChange(event : any) {
    this.selectedDay = event.target.value;
  }

  schedules : Schedule[] =[];
  

  // fetch() {
  //   this.schedule.GetDaySchedule(this.selectedDay).subscribe((data) => this.schedules = data);
  //   console.log(this.schedules.forEach(ele => {ele.DoctorId}))
  // }

}
