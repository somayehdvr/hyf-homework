-- Part 3: More queries
-- You should do these queries on the database hyf_lesson2, which we created last class.
-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT 
    task.*
FROM
    task
    LEFT JOIN user ON task.user_id = user.id
WHERE
    user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT 
    task.*
FROM
    task
    LEFT JOIN user ON task.user_id = user.id
    LEFT JOIN status ON task.status_id = status.id
WHERE
    user.name = 'Donald Duck'
    AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT 
    task.*
FROM
    task
    LEFT JOIN user ON task.user_id = user.id
WHERE
    user.name = 'Maryrose Meadows'
    AND month(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT 
    COUNT(*) as task_count, month(created)
FROM
    task
GROUP BY
    month(created);