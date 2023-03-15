import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppointmentDoctor } from './Models/AppointmentService_Doctor.model';
import { Guid } from 'guid-typescript';

export class AppointmentServiceService {

  constructor(private http : HttpClient) {

  }
// baseapiurl : string = 'https://localhost:7155'
// getAppointmentsByStatusOne() : Observable<AppointmentDoctor[]>
// {
//   return this.http.get<AppointmentDoctor[]>(this.baseapiurl + '/api' + '/Appointment' + '/GetAppointmentsByStatusOne')

// }

}


@Injectable({
  providedIn: 'root'
})
export class AppointmentService{
  constructor(private http : HttpClient) {

  }
baseapiurl : string = 'https://localhost:7155'
getAppointmentsByStatusOne() : Observable<AppointmentDoctor[]>
{
  return this.http.get<AppointmentDoctor[]>(this.baseapiurl + '/api' + '/Appointment' + '/GetAppointmentsByStatusOne')

}
getAppointmentsByDoctorId(doctor_id : string) : Observable<AppointmentDoctor[]>{
  return this.http.get<AppointmentDoctor[]>(`${this.baseapiurl}/api/Appointment/GetAppointmentsByDoctorId?doctor_id=${doctor_id}`)
}
addAppointmentByPatient(addAppointment : AppointmentDoctor) : Observable<AppointmentDoctor>{
  console.log(addAppointment);

  return this.http.post<AppointmentDoctor>(this.baseapiurl + '/api' + '/Appointment' + '/AddAppointmentByPatient' , addAppointment);
}

updateStatusByDoctor(appointment_id : Guid|undefined , status : number | undefined) : Observable<AppointmentDoctor> {
  // return this.http.put<AppointmentDoctor>(this.baseapiurl + '/api' + '/Appointment' + '/UpdateStatusByDoctor?appointment_id=' + appointment_id + '&status=' + status , {});
  return this.http.put<AppointmentDoctor>(`${this.baseapiurl}/api/Appointment/UpdateStatusByDoctor?appointment_id=${appointment_id}&status=${status}`,{});

}

updateNurseIdByNurse(appointment_id : Guid|undefined , nurse_id : string|undefined) : Observable<AppointmentDoctor>{


  return this.http.put<AppointmentDoctor>(`${this.baseapiurl}/api/Appointment/UpdateNurseIdByNurse?appointment_id=${appointment_id}&nurse_id=${nurse_id}`,{});

}

}
