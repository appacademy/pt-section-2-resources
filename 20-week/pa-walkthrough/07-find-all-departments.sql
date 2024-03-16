-- Your code here 
SELECT distinct department 
FROM tools
WHERE department IS NOT NULL
ORDER BY department;