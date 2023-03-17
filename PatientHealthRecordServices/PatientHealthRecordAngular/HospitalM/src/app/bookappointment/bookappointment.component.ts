import { Component } from '@angular/core';

import { MatFormField } from '@angular/material/form-field';

interface Doctor {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent {
  doc: Doctor[] = [
    {value: 'doctor-1', viewValue: 'Gynacologist'},
    {value: 'doctor-2', viewValue: 'Dermotologist'},
    {value: 'doctor-3', viewValue: 'Cardiolist'},
  ];
}
