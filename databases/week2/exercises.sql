-- Get all the tasks assigned to Pavel;
SELECT 
    task.*
FROM 
    task
    LEFT JOIN user ON task.user_id = user.id
WHERE 
    user.name LIKE "Pavel%";
-- Find how many tasks each user is responsible for;
SELECT user.name, COUNT(*) as taskCount
FROM user
LEFT JOIN task ON task.user_id = user.id
GROUP BY user.name;
-- Find how many tasks with a status=Done each user is responsible for;
SELECT 
    user.name, COUNT(*) as taskCount
FROM 
    user
    LEFT JOIN task ON task.user_id = user.id
    LEFT JOIN status ON task.status_id = status.id
WHERE 
    status.name = "Done"
GROUP BY 
    user.name;
