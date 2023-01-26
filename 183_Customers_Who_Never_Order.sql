select
    customers.name as 'Customers'
from
    customers
where
    customers.id not in(
        select
            customerid
        from
            orders
    );

-- SLOWER SOLUTION
-- SELECT
--     Customers.name as Customers
-- FROM
--     Customers
--     LEFT JOIN Orders ON Customers.id = Orders.customerId
-- WHERE
--     Orders.id IS NULL