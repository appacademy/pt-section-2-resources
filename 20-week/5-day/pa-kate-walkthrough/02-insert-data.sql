-- Your code here 
INSERT INTO tools (name, price, department) VALUES
('Snow shovel', 16.50, 'Home & Garden'),
('Work light', 29.99, 'Electrical'),
('Wheelbarrow', 89.99, 'Home & Garden'),
('Pipe Wrench', 18.99, 'Plumbing'),
('Pipe Cutter', 36.36, 'Plumbing'),
('Rake', 15.45, 'Home & Garden'),
('Women''s Gloves', 8.39, 'Home & Garden'),
('Men''s Gloves', 8.39, 'Home & Garden');


INSERT INTO customers (first_name, last_name, phone_number)
VALUES 
('John', 'Smith', 1111111111),
('Jane', 'Doe', 2222222222);

INSERT INTO purchases (customer_id, tool_name, quantity)
VALUES
(1, 'Work light', 1),
(1, 'Pipe Cutter', 2),
(2, 'Snow shovel', 3),
(2, 'Work light', 1),
(2, 'Women''s Gloves', 1),
(2, 'Pipe Wrench', 1),
(2, 'Pipe Cutter', 1),
(1, 'Wheelbarrow', 3),
(1, 'Men''s Gloves', 2);
