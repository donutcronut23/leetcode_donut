# Write your MySQL query statement below
select
    distinct author_id as id
from Views
where
    author_id = viewer_id
order by
    id asc

1148_Article_Views_I
