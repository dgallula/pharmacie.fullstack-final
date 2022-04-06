create database pharm;

use pharm;

CREATE TABLE companies (
	id   INT NOT NULL AUTO_INCREMENT ,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);



insert into companies(name)
values
('pfizer'),
('Teva'),
('Johnson and Johnson'),
('Roche'),
('Novartis'),
('Merx');



CREATE TABLE medicaments (
id   INT NOT NULL AUTO_INCREMENT ,
name VARCHAR(255) not null,
weight int not null,
medCompanyId int Not null,
primary key (id),
FOREIGN KEY(medcompanyId) REFERENCES companies(id)
);




insert into medicaments (name,weight,medcompanyId)
values 
('doliprane',500,2 ),
('aspegic',250,3),
('daflon',1000,2),
('aguamol', 500,6),
('aguamol', 1000,2),
('rennie', 1000,2),
('imodium', 500,6),
('vitamine a', 500,5),
('vitamine b', 500,5),
('vitamine c', 500,4),
('vitamine d', 500,5),
('vitemine e', 500,2),
('guransan', 500,1),
('kas', 500,2),
('vitamine k', 500,2),
('potasium', 500,4),
('magneb6', 500,5),
('biseptine', 500,2),
('levothyrox', 500,3),
('gaviscon', 500,4);





select * from medicaments;

select * from companies;

