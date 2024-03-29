CREATE TABLE [PatientBasicRecord](
    [Id] UNIQUEIDENTIFIER ,
    [DateTime] smalldatetime,
    [Patient_Id] NVARCHAR(max),
    [Nurse_Id] NVARCHAR(max),
    [Appointment_Id] NVARCHAR(100) PRIMARY KEY,
    [Bp] NVARCHAR(max),
    [Heart_Rate] int,
    [SpO2] NVARCHAR(max),
    [Weight] NVARCHAR(max),
    [Height] NVARCHAR(max),
    [Blood_Group] NVARCHAR(max),
    [Temperature] NVARCHAR(max)
);


CREATE table [PatientAllergy](
    [Id] UNIQUEIDENTIFIER PRIMARY KEY,
    [Health_Id] NVARCHAR(max),
    [Appointment_Id] NVARCHAR(100),
    [Allergy] NVARCHAR(max),
    CONSTRAINT [Fk_PatientAllergy]  FOREIGN Key(Appointment_Id) REFERENCES [PatientBasicRecord](Appointment_Id) ON DELETE CASCADE ON UPDATE CASCADE
)


CREATE TABLE [PatientHealthRecord](
    [Id] UNIQUEIDENTIFIER,
    [DateTime] smalldatetime,
    [Patient_Id] NVARCHAR(max),
    [Doctor_Id] NVARCHAR(max),
    [Appointment_Id] NVARCHAR(100) PRIMARY KEY,
    [Conclusion] NVARCHAR(max) 
);

Create TABLE [PatientMedication](
    [Id] UNIQUEIDENTIFIER PRIMARY Key,
    [Health_Id] NVARCHAR(max),
    [Appointment_Id] NVARCHAR(100),
    [Drug] NVARCHAR(max),
    CONSTRAINT [Fk_patientmedication] FOREIGN KEY(Appointment_Id) REFERENCES [PatientHealthRecord](Appointment_Id) ON DELETE CASCADE ON UPDATE CASCADE
);

Create TABLE [PatientTest](
    [Id] UNIQUEIDENTIFIER PRIMARY Key,
    [Health_Id] NVARCHAR(max),
    [Appointment_Id] NVARCHAR(100),
    [Test] NVARCHAR(max),
    [Result] NVARCHAR(max),
    CONSTRAINT [Fk_patientTest] FOREIGN KEY(Appointment_Id) REFERENCES [PatientHealthRecord](Appointment_Id) ON DELETE CASCADE ON UPDATE CASCADE
);

SELECT * FROM PatientBasicRecord
SELECT * FROM PatientAllergy
SELECT * FROM PatientHealthRecord
SELECT * FROM PatientMedication
SELECT * FROM PatientTest

