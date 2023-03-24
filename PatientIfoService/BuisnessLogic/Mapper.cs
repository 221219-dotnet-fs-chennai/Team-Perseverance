using DataLogic.Entities;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic
{
    public class Mapper
    {
        public static PatientInfo PatientInfo(Patientinfo patientInfo)
        {
            return new PatientInfo()
            {
                PatId = patientInfo.PatId,
                Fullname = patientInfo.Fullname,
                Age = patientInfo.Age,
                Gender = patientInfo.Gender,
                Email = patientInfo.Email,
                Pasword = patientInfo.Pasword,
                Phone = patientInfo.Phone,
                AdressLine= patientInfo.AdressLine,
                State = patientInfo.State,
               City = patientInfo.City,
            };
        }
        public static Patientinfo PatientInfo(PatientInfo patientInfo)
        {
            return new Patientinfo()
            {
                PatId = patientInfo.PatId,
                Fullname = patientInfo.Fullname,
                Age = patientInfo.Age,
                Gender = patientInfo.Gender,
                Email = patientInfo.Email,
                Pasword = patientInfo.Pasword,
                Phone = patientInfo.Phone,
                AdressLine = patientInfo.AdressLine,
                State = patientInfo.State,
                City= patientInfo.City,
            };
        }
    }
}
