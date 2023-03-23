create table Allergy(
    Allergy_Id UNIQUEIDENTIFIER NOT NULL,
    Allergy_Name VARCHAR (max) NOT NULL,
    CONSTRAINT [PK_Allergy] PRIMARY KEY(Allergy_Id)
)

drop table Allergy

