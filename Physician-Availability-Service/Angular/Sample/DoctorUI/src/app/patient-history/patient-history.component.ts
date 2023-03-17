import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent{

  constructor() { }

  histories : patientHistory[] = [{
    date : "23/12/1000",
    medicines : `paracetmol`,
    tests : `Blood test : 
    Result : positive`
  },
  {
    date : "23/12/1000",
    medicines : `paracetmol`,
    tests : `Blood test : 
    Result : positive`
  },
  {
    date : "23/12/1000",
    medicines : `paracetmol`,
    tests : `Blood test : 
    Result : positive`
  },
  {
    date : "23/12/1000",
    medicines : `paracetmol`,
    tests : `Blood test : 
    Result : positive`
  },
  {
    date : "23/12/1000",
    medicines : `paracetmol`,
    tests : `Blood test : 
    Result : positive`
  }]

}

export interface patientHistory{
  date : string
  medicines : string
  tests : string 
}


