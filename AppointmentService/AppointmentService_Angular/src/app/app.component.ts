import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { AppointmentDoctor } from '../app/services/Models/AppointmentService_Doctor.model';
import { AppointmentService, AppointmentServiceService } from './services/appointment-service.service';
import { AfterViewChecked, AfterViewInit,  DoCheck, OnInit, ViewChild } from '@angular/core';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private appointmentService : AppointmentService) {


  }
  ngOnInit(): void {
    this.appointmentService.getAppointmentsByStatusOne()
    .subscribe({
      next:(appointments) =>{
      this.appointmentdoctor = appointments;
      console.log(this.appointmentdoctor)
      },
      error : (response) => {
        console.log(response);
      }


    });
    this.appointmentService.getAppointmentsByDoctorId('0245b75e-2398-4a8d-8617-44fa42f534c1')
    .subscribe({
      next:(appointments) =>{
      this.appointmentdoctor = appointments;
      console.log(this.appointmentdoctor)
      },
      error : (response) => {
        console.log(response);
      }


    });
  };

  appointmentdoctor : AppointmentDoctor[] = []



  title = 'Appointment_Service_Angular';
  isExpanded : boolean = true ;
  opened=false;
  openSideNav()
  {
    this.opened=true;
  }

  log(state : string)
  {
    console.log(state);

  }
  addAppointment : AppointmentDoctor = {

    doctorId : '0245b75e-2398-4a8d-8617-44fa42f534c1',
    patientId : '1245b75e-2398-4a8d-8617-44fa42f534c1',
    nurseId : '2245b75e-2398-4a8d-8617-44fa42f534c1',
    status : 1


  }

  updateAppointmentStatus : AppointmentDoctor = {

    appointmentId : Guid.parse('4ed8f803-17a1-4823-8164-2624cc54b5dc'),

    status : 1


  }

  updateNurseId : AppointmentDoctor = {
    appointmentId : Guid.parse('4ed8f803-17a1-4823-8164-2624cc54b5dc'),

    nurseId : '2245b75e-2398-4a8d-8617-44fa42f534c1',

  }

  addAppointmentByPatient(){
    this.appointmentService.addAppointmentByPatient(this.addAppointment)
    .subscribe({
      next : (appointment) =>{
        console.log(appointment);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
  updateStatusByDoctor(){
    this.appointmentService.updateStatusByDoctor(this.updateAppointmentStatus.appointmentId,this.updateAppointmentStatus.status)
    .subscribe({
      next : (appointment) => {
        console.log(appointment);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  updateNurseIdByNurse(){
    this.appointmentService.updateNurseIdByNurse(this.updateNurseId.appointmentId,this.updateNurseId.nurseId)
    .subscribe({
      next : (appointment) => {
        console.log(appointment);
      },
      error: (response) => {
        console.log(response);
      }

    });
  }


}
