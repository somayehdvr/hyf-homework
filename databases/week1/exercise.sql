USE hyf_lesson1;

-- Select the names and phones of all users
Select name, phone FROM hyf_lesson1.user;

-- Select the name of the user with id=10;
Select name FROM hyf_lesson1.user WHERE id=10;

-- Find how many users exist in the database;
SELECT COUNT(*) FROM hyf_lesson1.user;

-- Select the names of the first 5 users in the database;
SELECT name FROM hyf_lesson1.user  LIMIT 5;

-- Select the names of the last 3 users in the database;
Select name FROM hyf_lesson1.user ORDER BY id DESC LIMIT 3;

-- Sum all the ids in the user table;
SELECT Sum(id) FROM hyf_lesson1.user;

-- Select all users and order them alphabetically by name;
Select * FROM user ORDER BY name;

-- Find all tasks that include SQL either on the title or on the description;
SELECT * FROM task WHERE title LIKE '%SQL%' OR description LIKE '%SQL%';

-- Find the title of all tasks that the user Maryrose is responsible for;
SELECT title 
FROM task 
JOIN user on user.id = task.user_id
WHERE user.name LIKE "%Maryrose%";

-- Find how many tasks each user is responsible for
SELECT user_id, COUNT(*)
FROM task
GROUP BY user_id;

-- Find how many tasks with a status=Done each user is responsible for;
SELECT COUNT(*)
FROM task
JOIN status ON status_id = status.id
WHERE status.name LIKE "%Done%"
