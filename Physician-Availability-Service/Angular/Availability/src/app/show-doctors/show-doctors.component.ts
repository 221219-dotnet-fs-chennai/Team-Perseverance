import { Component } from '@angular/core';
import { Schedule } from '../app.component';

@Component({
  selector: 'app-show-doctors',
  templateUrl: './show-doctors.component.html',
  styleUrls: ['./show-doctors.component.css']
})
export class ShowDoctorsComponent {

  schedules : Schedule[] = [] 
  getDoctorIds(event : Schedule[]) {
    this.schedules = event
  }

}
