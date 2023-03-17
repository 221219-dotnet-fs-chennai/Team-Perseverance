CREATE SCHEMA PIS;
create table PIS.Patientinfo(Pat_id UNIQUEIDENTIFIER NOT NULL,fullname varchar(25),age int, gender varchar(20),email varchar(50) not null,pasword varchar(50) not null,phone bigint,adress varchar(50) ,State varchar(25),country varchar(25) primary key(Pat_id));

insert into PIS.Patientinfo(Pat_id, fullname,age,gender,email,pasword,phone,adress,[State],country) VALUES (NEWID(),'Geoffrey',23,'male','geoffrey12@gmail.com','password123','9450648036','Chennai','Tamilnadu','India');
insert into PIS.Patientinfo(Pat_id,fullname,age,gender,email,pasword,phone,adress,[State],country) VALUES (NEWID(),'Prasanna',23,'male','prasanna68@gmail.com','Admin123','6048074303','Trichy','Tamilnadu','India');
insert into PIS.Patientinfo(Pat_id,fullname,age,gender,email,pasword,phone,adress,[State],country) VALUES (NEWID(),'Supra',26,'female','supra@gmail.com','qwerty','9897593496','Madurai','Tamilnadu','India');

SELECT * from PIS.Patientinfo;
 /*drop table PIS.Patientinfo;*/

