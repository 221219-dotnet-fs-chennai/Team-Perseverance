import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent {
  constructor() { }

  histories : patientHistory[] = [{
    date : "23-Mar-2000",
    medicines : `paracetmol`,
    tests : `Blood test : 
    Result : positive`
  },
  {
    date : "28-Mar-2000",
    medicines : `paracetmol`,
    tests : `Blood test : 
    Result : positive`
  },
  
]

}

export interface patientHistory{
  date : string
  medicines : string
  tests : string 
}

