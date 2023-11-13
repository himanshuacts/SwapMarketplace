/*
    Date: 08/11/2023
    Author: Himanshu Wakodikar
    Purpose: Initialising SwapKart Database
*/

drop database if exists swapkart;
create database swapkart;
use swapkart;

/*
    Date: 09/11/2023
    Author: Vishwajeet Singh
    Purpose: testing git
*/



/*
    Date: 09/11/2023
    Author: Shreyas Sonawane
    Purpose: testing git
*/

/*
    Date: 11/11/2023
    Author: Dipak Gore
    Purpose: State table contain the data of 29 states.
*/

create table state (state_id int primary key,state_name varchar(25));
insert into state values(01,'Andhra Pradesh');
insert into state values(02,'Arunachal Pradesh');
insert into state values(03,'Assam'),(04,'Bihar'),
(05,'Chhattisgarh'),
(06,'Goa'),
(07,'Gujarat'),
(08,'Haryana'),
(09,'Himachal Pradesh'),
(10,'Jammu and Kashmir'),
(11,'Jharkhand'),
(12,'Karnataka'),
(13,'Kerala'),
(14,'Madhya Pradesh'),
(15,'Maharashtra'),
(16,'Manipur'),
(17,'Meghalaya'),
(18,'Mizoram'),
(19,'Nagaland'),
(20,'Odisha'),
(21,'Punjab'),
(22,'Rajasthan'),
(23,'Sikkim'),
(24,'Tamil Nadu'),
(25,'Telangana'),
(26,'Tripura'),
(27,'Uttar Pradesh'),
(28,'Uttarakhand'),
(29,'West Bengal');







