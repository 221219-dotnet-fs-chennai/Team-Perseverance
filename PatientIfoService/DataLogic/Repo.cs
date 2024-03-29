﻿using DataLogic.Entities;
using Models;

namespace DataLogic
{
    public class Repo : IRepo
    {
       readonly PatientInfoServiceDbContext _context = new();
        public Repo(PatientInfoServiceDbContext context)
        {
            _context = context;
        }
        public void AddnewPatientInfo(Patientinfo patientinfo)
        {
            _context.Patientinfos.Add(patientinfo);
            _context.SaveChanges();
        }

        public IEnumerable<PatientInfo> GetallPatientinfos()
        {
            var patient = _context.Patientinfos;
            var patient_info = (
                from pr in patient
                select new PatientInfo()
                {
                    AdressLine = pr.AdressLine  ,
                    Age = pr.Age,
                   City = pr.City,
                    Email = pr.Email,
                    State = pr.State,
                    Fullname = pr.Fullname,
                    Gender = pr.Gender,
                    Pasword = pr.Pasword,
                    PatId = pr.PatId,
                    Phone = pr.Phone,
                }

                );
            return patient_info.ToList();
        }

        public IEnumerable<PatientInfo> GetPatientinfosbyemail(string Email)
        {
            var patient = _context.Patientinfos;
            var patient_info = (
                from pr in patient
                where pr.Email == Email
                select new PatientInfo()
                {
                    AdressLine= pr.AdressLine ,
                    Age = pr.Age,
                    City = pr.City,
                    Email = pr.Email,
                    State = pr.State,
                    Fullname = pr.Fullname,
                    Gender = pr.Gender,
                    Pasword = pr.Pasword,
                    PatId = pr.PatId,
                    Phone = pr.Phone,
                }

                );
            return patient_info.ToList();
        }

        public PatientInfo updatePatientinfos(Guid Pat_id, Patientinfo patientinfo)
        {
            PatientInfo info = new();
            var patient = _context.Patientinfos.Where(pat => pat.PatId == Pat_id).FirstOrDefault();
            if (patient != null)
            {
                if ((patientinfo.Fullname != null && patientinfo.Fullname != "string") && patient.Fullname != patientinfo.Fullname)
                {
                    patient.Fullname = patientinfo.Fullname;
                }
                if ((patientinfo.Age != null && patientinfo.Age != 0) && patient.Age != patientinfo.Age)
                {
                    patient.Age = patientinfo.Age;
                }
                if ((patientinfo.Gender != null && patientinfo.Gender != "string") && patient.Gender != patientinfo.Gender)
                {
                    patient.Gender = patientinfo.Gender;
                }
                if ((patientinfo.AdressLine != null && patientinfo.AdressLine != "string") && patient.AdressLine != patientinfo.AdressLine)
                {
                    patient.AdressLine = patientinfo.AdressLine;
                }
                if ((patientinfo.Phone != null && patientinfo.Phone != 0) && patient.Phone != patientinfo.Phone)
                {
                    patient.Phone = patientinfo.Phone;
                }
                if ((patientinfo.State != null && patientinfo.State != "string") && patient.State != patientinfo.State)
                {
                    patient.State = patientinfo.State;
                }
                if ((patientinfo.City != null && patientinfo.City != "string") && patient.City != patientinfo.City)
                {
                    patient.City = patientinfo.City;
                }
            }
            _context.Patientinfos.Update(patient);
            _context.SaveChanges();
            return info;
        }
    }
}