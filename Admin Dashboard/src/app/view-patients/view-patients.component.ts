import { Component } from '@angular/core';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent {

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

}
