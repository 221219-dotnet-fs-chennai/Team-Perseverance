import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-doctor',
  templateUrl: './schedule-doctor.component.html',
  styleUrls: ['./schedule-doctor.component.css']
})
export class ScheduleDoctorComponent {
  patients = [

    {
          title: 'Max', content: ' age:20 '
        },
        {
          title: 'Maxwell', content: ' age:21'
        },
        {
          title: 'David', content: ' age:22'
        },


]

currentdate : Date  = new Date();
datetoday : Date  = new Date();
datenextweek : Date  = new Date(this.datetoday.setDate(this.datetoday.getDate()+7));

doctors = [

  {
        title: 'Manoj', content: ' Schedule the doctor availability on' , date:this.datenextweek
      },
      {
        title: 'Bhanu', content: ' Schedule the doctor availability on', date:this.datenextweek
      },
      {
        title: 'Srinu', content: ' Schedule the doctor availability on' , date:this.datenextweek
      },




]


}
