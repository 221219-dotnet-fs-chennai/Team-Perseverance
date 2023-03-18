import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScheduleComponent } from './schedule/schedule.component';
import { HttpClientModule } from '@angular/common/http'
import { GetScheduleComponent } from './get-schedule/get-schedule.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import {MatRadioModule} from '@angular/material/radio';
import { BookAppointmentComponent } from './show-doctors/ChooseDate/book-appointment/book-appointment.component';
import { ShowDoctorsComponent } from './show-doctors/show-doctors.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarComponent } from './add-schedule/snackbar/snackbar.component';
import {MatCardModule} from '@angular/material/card';
import { BookingAlertComponent } from './booking-alert/booking-alert.component';
import { SnackbarBookingComponent } from './show-doctors/ChooseDate/snackbar-booking/snackbar-booking.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    GetScheduleComponent,
    AddScheduleComponent,
    BookAppointmentComponent,
    ShowDoctorsComponent,
    SnackbarComponent,
    BookingAlertComponent,
    SnackbarBookingComponent,
    UpdateScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatChipsModule,
    HttpClientModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
