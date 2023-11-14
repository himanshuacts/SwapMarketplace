/*
    Date: 08/11/2023
    Author: Himanshu Wakodikar
    Purpose: Initialising SwapKart Database
*/

drop database if exists swapkart;
create database swapkart;
use swapkart;

/*
    Date: 11/11/2023
    Author: Dipak Gore
    Purpose: State table contain the data of 29 states.
*/
/*adding state table */
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


/*
    Date: 13/11/2023
    Author: Vishwajeet Singh
    Purpose: city table containing the data of cities of 29 states and UT.
*/

create table city (city_id int primary key,city_name varchar(30),state_id int );

insert into city values(01,'VISHAKHAPATNAM',01);
insert into city values(02,'VIJAYAWADA',01),
(03,'GUNTUR',01),
(04,'NELLORE',01),
(05,'KURNOOL',01),
(06,'BORDUMSA',02),
(07,'BUBANG',02),
(08,'GANDHIGRAM',02),
(09,'JAIRAMPUR',02),
(10,'KHARSANG',02),
(11,'GUWAHATI',03),
(12,'SILCHAR',03),
(13,'JORHAT',03),
(14,'BONGAIGAON',03),
(15,'TINSUKIA',03),
(16,'PATNA',04),
(17,'GAYA',04),
(18,'BHAGALPUR',04),
(19,'MUZAFFARPUR',04),
(20,'BIHAR SHARIF',04),
(21,'RAIPUR',05),
(22,'BHILAI',05),
(23,'BILASPUR',05),
(24,'KORBA',05),
(25,'RAJNANDGAON',05),
(26,'PANAJI',06),
(27,'BICHOLIM',06),
(28,'MARGAO',06),
(29,'CURCHOREM',06),
(30,'MAPUSA',06),
(31,'AHMEDABAD',07),
(32,'SURAT',07),
(33,'VADODARA',07),
(34,'RAJKOT',07),
(35,'BHAVNAGAR',07),
(36,'FARIDABAD',08),
(37,'GURUGRAM',08),
(38,'PANIPAT',08),
(39,'AMBALA',08),
(40,'YAMUNANAGAR',08),
(41,'SHIMLA',09),
(42,'DHARAMSALA',09),
(43,'SOLAN',09),
(44,'MANDI',09),
(45,'PALAMPUR',09),
(46,'JAMMU',10),
(47,'ANANTNAG',10),
(48,'BADGAM',10),
(49,'BANDIPORA',10),
(50,'BARAMULLA',10),
(51,'JAMSHEDPUR',11),
(52,'DHANBAD',11),
(53,'RANCHI',11),
(54,'BOKARO STEEL CITY',11),
(55,'DEOGHAR',11),
(56,'BANGALORE',12),
(57,'MYSORE',12),
(58,'HUBBALLI-DHARWAD',12),
(59,'MANGALORE',12),
(60,'BELAGAVI',12),
(61,'THIRUVANANTHAPURAM',13),
(62,'KOZHIKODE',13),
(63,'KOCHI',13),
(64,'KOLLAM',13),
(65,'THRISSUR',13),
(66,'INDORE',14),
(67,'BHOPAL',14),
(68,'JABALPUR',14),
(69,'GWALIOR',14),
(70,'UJJAIN',14),
(71,'MUMBAI',15),
(72,'PUNE',15),
(73,'NAGPUR',15),
(74,'THANE',15),
(75,'PIMPRI-CHINCHWAD',15),
(76,'IMPHAL',16),
(77,'THOUBAL',16),
(78,'KAKCHING',16),
(79,'UKHRUL',16),
(80,'LILONG',16),
(81,'SHILLONG',17),
(82,'TURA',17),
(83,'MAWLAI',17),
(84,'NONGTHYMMAI',17),
(85,'MADANRITING',17),
(86,'AIZAWL',18),
(87,'LUNGLEI',18),
(88,'CHAMPHAI',18),
(89,'SAIHA',18),
(90,'KOLASIB',18),
(91,'DIMAPUR',19),
(92,'KOHIMA',19),
(93,'TUENSANG',19),
(94,'MOKOKCHUNG',19),
(95,'WOKHA',19),
(96,'BHUBANESWAR',20),
(97,'CUTTACK',20),
(98,'ROURKELA',20),
(99,'BERHAMPUR',20),
(100,'SAMBALPUR',20),
(101,'LUDHIANA',21),
(102,'AMRITSAR',21),
(103,'JALANDHAR',21),
(104,'PATIALA',21),
(105,'BATHINDA',21),
(106,'JAIPUR',22),
(107,'JODHPUR',22),
(108,'KOTA',22),
(109,'BIKANER',22),
(110,'BHIWADI',22),
(111,'GANGTOK',23),
(112,'NAMCHI',23),
(113,'RANGPO',23),
(114,'JORETHANG',23),
(115,'RHENAK',23),
(116,'CHENNAI',24),
(117,'KANCHIPURAM',24),
(118,'VELLORE',24),
(119,'THIRUVALLUR',24),
(120,'SALEM',24),
(121,'HYDERABAD',25),
(122,'WARANGAL',25),
(123,'NIZAMABAD',25),
(124,'KARIMNAGAR',25),
(125,'RAMAGUNDAM',25),
(126,'AGARTALA',26),
(127,'DHARMANAGAR',26),
(128,'UDAIPUR',26),
(129,'KAILASAHAR',26),
(130,'BISHALGARH',26),
(131,'LUCKNOW',27),
(132,'KANPUR',27),
(133,'GHAZIABAD',27),
(134,'AGRA',27),
(135,'MEERUT',27),
(136,'DEHRADUN',28),
(137,'HARIDWAR',28),
(138,'RUDRAPUR',28),
(139,'KASHIPUR',28),
(140,'ROORKEE',28),
(141,'KOLKATA' ,29),
(142,'HOWRAH',29),
(143,'DURGAPUR',29),
(144,'ASANSOL',29),
(145,'SILIGURI',29),
(146,'PUDUCHERRY',30),
(147,'LAKSHADWEEP',30),
(148,'DELHI',30),
(149,'CHANDIGARH',30),
(150,'DADRA AND NAGAR HAVELI',30),
(151,'ANDAMAN AND NICOBAR ISLANDS',30);

alter table city
add foreign key (state_id) references state(state_id);

/*
    Date: 14/11/2023
    Author: Himanshu Wakodikar
    Purpose: User table contain the data of user when they register
*/

create table user
(
    user_id int primary key auto_increment,
    first_name varchar(20),
    last_name varchar(20),
    email_id varchar(50),
    password varchar(12),
    mobile bigint,
    rating int,
    city_id int,
    foreign key (city_id) references city(city_id)
);
