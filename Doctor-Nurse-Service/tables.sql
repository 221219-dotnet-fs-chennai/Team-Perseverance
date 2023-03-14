create table [doctor]
(
  [Id] UNIQUEIDENTIFIER primary key,
  [name] varchar(max),
  [email] varchar(max),
  [gender] varchar(10),
  [specialization] varchar(max),
  [img_url] varchar(max),
  [experience] int,
  [phone_no] bigint
)

create table [nurse]
(
  [Id] UNIQUEIDENTIFIER primary key,
  [name] varchar(max),
  [email] varchar(max),
  [phone_no] bigint
)
select * from [doctor]
drop table [doctor]

TRUNCATE table [doctor]