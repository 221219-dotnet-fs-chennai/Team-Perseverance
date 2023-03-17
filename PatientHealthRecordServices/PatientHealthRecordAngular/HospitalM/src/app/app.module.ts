import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { PatientbasicrecordComponent } from './patientbasicrecord/patientbasicrecord.component';
import { PatientMedicationComponent } from './patient-medication/patient-medication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import { HealthinfoComponent } from './healthinfo/healthinfo.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PatientbasicrecordComponent,
    PatientMedicationComponent,
    DashboardComponent,
    HealthinfoComponent,
    BookappointmentComponent,
    ProfileComponent,

    
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    MatNativeDateModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

