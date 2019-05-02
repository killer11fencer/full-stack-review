create table users (
user_id serial primary key,
first_name varchar(50),
last_name varchar(50),
email varchar(50)
);

create table user_login (
login_id serial primary key,
username varchar(50),
password text);

-- we set text on password because a hash can be very long

create table balances (
balance_id serial primary key,
balance integer);


--entered data 

insert into user_login (username, password)
values(
'its_bryan',
'test123');

insert into users(first_name,last_name,email)
values(
'Bryan',
'Smith',
'bryan@gmail');

insert into balances (balance)
values(0);

--viewing data

select * from user_login;
select * from users;
select * from balances;
