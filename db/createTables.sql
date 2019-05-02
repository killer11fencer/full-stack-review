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