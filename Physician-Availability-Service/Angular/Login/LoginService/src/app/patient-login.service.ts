import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patientLogin } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class PatientLoginService {

  constructor(private http: HttpClient) { }

  get(email: string, password: string) {
    return this.http.get<string>(`https://localhost:44385/api/PatientLogin/Get?email=${email}&password=${password}`);
  }

  add(login : patientLogin) {
    return this.http.post<patientLogin>(`https://localhost:44385/api/PatientLogin/Add`, login);
  }

  update(login : patientLogin){
    return this.http.put<patientLogin>(`https://localhost:44385/api/PatientLogin/Update`, login);
  }

  delete(email : string){
    return this.http.delete<patientLogin>(`https://localhost:44385/api/PatientLogin/Delete?email=${email}`);
  }



}
