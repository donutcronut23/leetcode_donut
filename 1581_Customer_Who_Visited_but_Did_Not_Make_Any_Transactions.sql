-- # 1st Attempt (slow)

select
	v.customer_id as customer_id,
	count(v.visit_id) as count_no_trans
from
	Visits v
where
	v.visit_id not in (
	select
		t.visit_id
	from
		Transactions t
    )
group by
	customer_id


-- # 2nd Attempt (faster)

select
	customer_id,
	COUNT(visit_id) as count_no_trans
from
	Visits v
where
	not exists (
	select
		visit_id
	from
		Transactions t
	where
		t.visit_id = v.visit_id
	)
group by
	customer_id


-- # 3rd Attempt (fastest)

# Write your MySQL query statement below
select
	v.customer_id as customer_id,
	count(v.visit_id) as count_no_trans
from
	Visits v
left join Transactions t
    on
	v.visit_id = t.visit_id
where
	transaction_id is null
group by
	customer_id
