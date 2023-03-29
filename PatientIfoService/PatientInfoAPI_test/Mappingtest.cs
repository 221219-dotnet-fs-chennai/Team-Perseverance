using BuisnessLogic;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit.Sdk;
using DataLogic.Entities;

namespace PatientInfoAPI_test
{
    public class Mappingtest
    {
        Mapper map = new Mapper();



        [Fact]
        public void ModelToEntityTest()
        {
            // Arrange

            PatientInfo model = new PatientInfo();


            // Act

            var actualresult = Mapper.PatientInfo(model);


            // Assert

            Assert.Equal(typeof(Patientinfo), actualresult.GetType());
        }



        [Fact]
        public void EntityToModelTest()
        {
            // Arrange

          Patientinfo app = new Patientinfo();


            // Act

            var actualresult = Mapper.PatientInfo(app);


            // Assert


            Assert.Equal(typeof(PatientInfo), actualresult.GetType());
        }
    }
}
