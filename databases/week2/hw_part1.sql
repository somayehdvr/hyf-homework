-- Part 1: Working with tasks
-- Write the following sql queries:
-- In all the queries, you choose which is the task that you will modify/delete.
-- Add a task with these attributes: 
-- title, description, created, updated, due_date, status_id, user_id
INSERT INTO 
    task(title, description, created, updated, due_date, status_id, user_id)
VALUES
    ('Do the homework', 'You have DB homework to do', '2022-09-20 19:34:43', '2022-10-15 23:35:45', '2022-12-24 16:00:46', 2, 5);

-- Change the title of a task
UPDATE
    task
SET 
    title = 'Do the DB homework'
WHERE
    id = 36;

-- Change a task due date
UPDATE
    task
SET
    due_date = '2022-12-24 16:00:46'
WHERE
    title = 'Knit sweater';

-- Change a task status
UPDATE
    task
SET
    status_id = 3
WHERE
    id = 36;

-- Mark a task as complete
UPDATE
    task
SET
    status_id = 3
WHERE
    id = 35;

-- Delete a task
DELETE FROM
    task
WHERE
    id = 36;
