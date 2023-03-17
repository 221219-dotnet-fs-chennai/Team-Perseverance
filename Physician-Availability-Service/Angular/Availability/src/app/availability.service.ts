import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, scheduled } from 'rxjs';
import { Schedule } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor(private http : HttpClient) { }

  AddSchedule(sch : Schedule) : Observable<Schedule> {
    return this.http.post<Schedule>('https://localhost:44337/api/PhysicianAvailability/AddSchedule', sch);
  }

  UpdateDaySchedule(day: number, sch : Schedule) {
    return this.http.put<Schedule>(`https://localhost:44337/api/PhysicianAvailability/UpdateSchedule?day=${day}`, sch);
  }

  GetDaySchedule(day: string) {
    return this.http.get<Schedule[]>(`https://localhost:44337/api/PhysicianAvailability/GetSchedule?day=${day}`);
  }
}
