SELECT dodge, baskets.name, fruits.fruit_name FROM baskets
JOIN fruits
ON baskets.id = fruits.basket_id
WHERE baskets.dodge BETWEEN 1000 AND 1999
ORDER BY dodge DESC;
