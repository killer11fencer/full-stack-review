insert into user_login (username, password)
values(
    ${username},
    ${hash}
 ) returning username, password;

insert into users (first_name,last_name,email)
values (
    ${first_name},
    ${last_name},
    ${email}
);

insert into balances(balance)
values(
    0
) returning balance_id;