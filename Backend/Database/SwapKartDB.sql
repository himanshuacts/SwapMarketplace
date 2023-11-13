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
insert into state values(01,'ANDHRA PRADESH');
insert into state values(02,'ARUNACHAL PRADESH');
insert into state values(03,'ASSAM'),(04,'BIHAR'),
(05,'CHHATTISGARH'),
(06,'GOA'),
(07,'GUJARAT'),
(08,'HARYANA'),
(09,'HIMACHAL PRADESH'),
(10,'JAMMU AND KASHMIR'),
(11,'JHARKHAND'),
(12,'KARNATAKA'),
(13,'KERALA'),
(14,'MADHYA PRADESH'),
(15,'MAHARASHTRA'),
(16,'MANIPUR'),
(17,'MEGHALAYA'),
(18,'MIZORAM'),
(19,'NAGALAND'),
(20,'ODISHA'),
(21,'PUNJAB'),
(22,'RAJASTHAN'),
(23,'SIKKIM'),
(24,'TAMIL NADU'),
(25,'TELANGANA'),
(26,'TRIPURA'),
(27,'UTTAR PRADESH'),
(28,'UTTARAKHAND'),
(29,'WEST BENGAL'),
(30,'UNION TERRITORY');
select * from state;



