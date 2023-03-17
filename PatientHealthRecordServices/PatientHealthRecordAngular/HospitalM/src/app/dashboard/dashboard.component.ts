import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookappointmentComponent } from '../bookappointment/bookappointment.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  panelOpenState = false;
  constructor (private dialog:MatDialog){
  }
  openPopup(){
    this.dialog.open(BookappointmentComponent)

  }
}
