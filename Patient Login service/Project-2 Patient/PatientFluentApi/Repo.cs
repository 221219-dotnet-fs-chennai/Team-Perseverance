using Models;
using PatientFluentApi.Entities;

namespace PatientFluentApi
{
    public class Repo : IRepo<PatientLogin>
    {
        PhysicianAvailabilityServiceDbContext context;
        public Repo(PhysicianAvailabilityServiceDbContext context) 
        {
            this.context = context;
        }
        public IEnumerable<PatientLogin> Get()
        {
            return context.PatientLogins;
        }

        public void Add(PatientLogin patientLogin)
        {
            context.PatientLogins.Add(patientLogin);
            context.SaveChanges();
        }

        public void Update(PatientLogin patientLogin)
        {
            context.PatientLogins.Update(patientLogin);
            context.SaveChanges();
        }

        public void Delete(PatientLogin patientLogin)
        {
            context.PatientLogins.Remove(patientLogin);
            context.SaveChanges();
        }
    }
}