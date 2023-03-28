using AutoFixture;
using BuisnessLogic;
using Capstone_proj.Controllers;
using DataLogic.Entities;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Models;
using Moq;
using System;
using Xunit;

namespace PatientInfoAPI_test
{
    public class PatientInfotestAPI
    {
        private readonly IFixture fixture;
        private readonly Mock<ILogic> mockLogic;
        private readonly PatientInfoController controller;


        public PatientInfotestAPI()
        {
            fixture = new Fixture();
            mockLogic = fixture.Freeze<Mock<ILogic>>();
            controller = new PatientInfoController(mockLogic.Object);

        }
        [Fact]
        public void GetallPatientinfo_PatientInfoService_OkResponse()
        {
            // Arrange

            var appoinmentMock = fixture.Create<IEnumerable<PatientInfo>>();
            mockLogic.Setup(x => x.GetallPatientinfos()).Returns(appoinmentMock);

            // Act

            var result = controller.GetallPatientInfo();

            // Assert

            result.Should().NotBeNull();



            result.Should().BeAssignableTo<OkObjectResult>();
            result.As<OkObjectResult>().Value
                .Should().NotBeNull()
                .And.BeOfType(appoinmentMock.GetType());
            mockLogic.Verify(x => x.GetallPatientinfos(), Times.AtLeastOnce());


        }
        [Fact]
        public void GetallPatientinfo_PatientInfoService_BadRequestResponse()
        {
            // Arrange
            var request = fixture.Create<IEnumerable<PatientInfo>>();
            mockLogic.Setup(x => x.GetallPatientinfos()).Throws(new Exception("Something wrong with the request"));

            var result = controller.GetallPatientInfo();

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<BadRequestObjectResult>();
            mockLogic.Verify(x => x.GetallPatientinfos(), Times.AtLeastOnce());
        }

        [Fact]
        public void GetPatientinfobyemail_PatientInfoService_OkResponse()
        {

            var appoinmentMock = fixture.Create<IEnumerable<PatientInfo>>();
            var id = fixture.Create<string>();
            mockLogic.Setup(x => x.GetPatientDetailsByemail(id)).Returns(appoinmentMock);

            // Act

            var result = controller.GetPatientInfobyemail(id);

            // Assert

            result.Should().BeAssignableTo<OkObjectResult>();
            result.As<OkObjectResult>().Value
                .Should().NotBeNull()
                .And.BeOfType(appoinmentMock.GetType());
            mockLogic.Verify(x => x.GetPatientDetailsByemail(id), Times.AtLeastOnce());
        }
        [Fact]
        public void GetPatientinfobyemail_PatientInfoService_BadRequestResponse()
        {            // Arrange
            var request = fixture.Create<IEnumerable<PatientInfo>>();
            var id = fixture.Create<string>();
            mockLogic.Setup(x => x.GetPatientDetailsByemail(id)).Throws(new Exception("Something wrong with the request"));

            var result = controller.GetPatientInfobyemail(id);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<BadRequestObjectResult>();
            mockLogic.Verify(x => x.GetPatientDetailsByemail(id), Times.AtLeastOnce());
        }


        [Fact]
        public void AddnewPatientInfo_PatientInfoService_OkResponse()
        {
            // Arrange

            var app = fixture.Create<Patientinfo>();
         
            mockLogic.Setup(x => x.AddnewPatientInfo(app));

            // Act

            var result = controller.PostPatientInfo(app);

            // Assert
            result.Should().BeAssignableTo<CreatedResult>();
            result.As<CreatedResult>().Value
               .Should().NotBeNull()
               .And.BeOfType(app.GetType());
            mockLogic.Verify(x => x.AddnewPatientInfo(app), Times.AtLeastOnce());


        }
        [Fact]
        public void AddnewPatientInfo_PatientInfoService_BadRequestTest()
        {
            var request = fixture.Create<Patientinfo>();
            mockLogic.Setup(x => x.AddnewPatientInfo(request)).Throws(new Exception("Something wrong with the request"));


            var result = controller.PostPatientInfo(request);


            result.Should().NotBeNull();
            result.Should().BeAssignableTo<BadRequestObjectResult>();
            mockLogic.Verify(x => x.AddnewPatientInfo(request), Times.AtLeastOnce());
        }

        [Fact]
        public void UpdatePatientInfo_OK_Test()
        {
            var hr = fixture.Create<Patientinfo>();
            var id = fixture.Create<Guid>();
            mockLogic.Setup(x => x.updatePatientinfos(id, hr));

            var result = controller.UpdatepatientInfo(id, hr);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<CreatedResult>();
            result.As<CreatedResult>().Value
                .Should().NotBeNull()
                .And.BeOfType(hr.GetType());
            mockLogic.Verify(x => x.updatePatientinfos(id, hr), Times.AtLeastOnce());

        }

        [Fact]
        public void UpdatePatientInfo_BadRequest_Test()
        {
            var request = fixture.Create<Patientinfo>();
            var id = fixture.Create<Guid>();
            mockLogic.Setup(x => x.updatePatientinfos(id, request)).Throws(new Exception("Something wrong with the request"));

            var result = controller.UpdatepatientInfo(id, request);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<BadRequestObjectResult>();
            mockLogic.Verify(x => x.updatePatientinfos(id, request), Times.AtLeastOnce());

        }

    }
}