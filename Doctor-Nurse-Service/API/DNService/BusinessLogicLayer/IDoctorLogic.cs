﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer
{
    public interface IDoctorLogic
    {
        string AddDoctor(DataLayer.Entities.Doctor doctor);
        IEnumerable<DataLayer.Entities.Doctor> GetById(Guid id);
        IEnumerable<DataLayer.Entities.Doctor> GetAll();
    }
}
