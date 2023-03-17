import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientLoginService } from '../patient-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private pat : PatientLoginService) {}

  patient : patientLogin = {
    loginId : 'kkkkkkkkkk',
    email : 'email@gmail.com',
    password : 'password@123'
  }
  patient2 : patientLogin = {
    loginId : 'kkkkkkkkkk',
    email : 'email@gmail.com',
    password : 'pas@123'
  }
  patient3 : patientLogin = {
    loginId : '100f57e3-8dcb-4cb5-8595-9625c7aea722',
    email : 'str123@gmail.com',
    password : 'string1234'
  }

  addLogin() {
    return this.pat.add(this.patient).subscribe(data => console.log(data));
  }

  updateLogin(){
    this.pat.update(this.patient2).subscribe(data => console.log(data))
  }

  getLogin(){
    this.pat.get('email@gmail.com','pas@123').subscribe(data => console.log(data))
  }

  deleteLogin(){
    this.pat.delete('str123@gmail.com').subscribe(data => console.log(data))
  }

}

export interface patientLogin{
  loginId : string,
  email : string,
  password : string
}