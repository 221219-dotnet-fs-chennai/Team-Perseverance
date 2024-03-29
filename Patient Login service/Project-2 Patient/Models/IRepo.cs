﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public interface IRepo<T>
    {

        public IEnumerable<T> Get();

        public void Add(T patientLogin);

        public void Update(T patientLogin);

        public void Delete(T patientLogin);
    }
}
