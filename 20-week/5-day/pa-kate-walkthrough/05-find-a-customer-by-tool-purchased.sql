-- Your code here 
SELECT first_name, last_name, phone_number
FROM customers
JOIN purchases ON (customers.id = purchases.customer_id)
WHERE purchases.tool_name = 'Pipe Cutter'
ORDER BY purchases.id DESC
LIMIT 1;