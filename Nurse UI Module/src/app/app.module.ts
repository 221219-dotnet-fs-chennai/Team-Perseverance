import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateinfoComponent } from './components/updateinfo/updateinfo.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';



import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    UpdateinfoComponent,
    AppointmentsComponent,
    PatientHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatCardModule,MatProgressBarModule,
    MatTabsModule,MatButtonModule,MatIconModule,MatToolbarModule,
    MatExpansionModule,MatInputModule,MatSelectModule,FormsModule, ReactiveFormsModule,
    MatBottomSheetModule,MatSidenavModule,MatMenuModule,MatBadgeModule,MatTooltipModule,
    MatDividerModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
