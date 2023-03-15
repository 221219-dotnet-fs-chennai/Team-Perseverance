CREATE table Appointment(
    appointment_id UNIQUEIDENTIFIER,
    patient_id VARCHAR(36),
    doctor_id VARCHAR(36),
    nurse_id VARCHAR(36),
    status SMALLINT,
    CONSTRAINT[Pk_Appointment] PRIMARY KEY(appointment_id)

);


select * from Appointment;
drop table Appointment

