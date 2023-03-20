import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarBookingComponent } from '../show-doctors/snackbar-booking/snackbar-booking.component';

@Component({
  selector: 'app-booking-alert',
  templateUrl: './booking-alert.component.html',
  styleUrls: ['./booking-alert.component.css']
})
export class BookingAlertComponent {
  constructor(private _snackBar: MatSnackBar) {}

    openSnackBar() {
      this._snackBar.openFromComponent(SnackbarBookingComponent, {
        duration: 3000,
      });
    }
}
