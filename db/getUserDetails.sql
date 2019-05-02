select first_name,last_name,email,balance from users 
join balances on users.user_id = balances.balance_id
where users.user_id = ${id};