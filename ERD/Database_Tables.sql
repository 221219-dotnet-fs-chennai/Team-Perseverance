CREATE TABLE [PatientBasicRecord](
    [Id] UNIQUEIDENTIFIER ,
    [DateTime] smalldatetime,
    [Patient_Id] UNIQUEIDENTIFIER PRIMARY KEY,
    [Nurse_Id] UNIQUEIDENTIFIER,
    [Bp] NVARCHAR(max),
    [Heart_Rate] int,
    [SpO2] NVARCHAR(max) 
);


CREATE TABLE [PatientHealthRecord](
    [Id] UNIQUEIDENTIFIER PRIMARY KEY,
    [DateTime] smalldatetime,
    [Patient_Id] UNIQUEIDENTIFIER,
    [Doctor_Id] UNIQUEIDENTIFIER,
    [Conclusion] NVARCHAR(max) 
);

Create TABLE [PatientMedication](
    [Id] UNIQUEIDENTIFIER PRIMARY Key,
    [Health_Id] UNIQUEIDENTIFIER,
    [Drug] NVARCHAR(max),
    CONSTRAINT [Fk_patientmedication] FOREIGN KEY(Health_Id) REFERENCES [PatientHealthRecord](Id) ON DELETE CASCADE ON UPDATE CASCADE
);

Create TABLE [PatientTest](
    [Id] UNIQUEIDENTIFIER PRIMARY Key,
    [Health_Id] UNIQUEIDENTIFIER,
    [Test] NVARCHAR(max),
    [Result] NVARCHAR(max),
    CONSTRAINT [Fk_patientTest] FOREIGN KEY(Health_Id) REFERENCES [PatientHealthRecord](Id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE table [PatientAllergy](
    [Id] UNIQUEIDENTIFIER PRIMARY KEY,
    [Health_Id] UNIQUEIDENTIFIER,
    [Allergy] NVARCHAR(max),
    CONSTRAINT [Fk_PatientAllergy]  FOREIGN Key(Health_Id) REFERENCES [PatientBasicRecord](Patient_Id) ON DELETE CASCADE ON UPDATE CASCADE
)

SELECT * FROM PatientBasicRecord
SELECT * FROM PatientHealthRecord
SELECT * FROM PatientMedication
SELECT * FROM PatientTest
SELECT * FROM PatientAllergy
