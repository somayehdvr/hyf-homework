-- - [ ]  Create a new database `db_week_2`
CREATE DATABASE db_week_2
DEFAULT CHARACTER SET = 'utf8mb4';

USE db_week_2;
-- - [ ]  in `db_week_2`, create two new tables,
--  `homework` and `difficulty` - see below which columns they should have 
--(define attribute types, constraints, primary keys and foreign keys based on this)
CREATE TABLE difficulty (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    difficulty VARCHAR(255) NOT NULL
);

CREATE TABLE homework (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    difficulty_id INT(10) UNSIGNED NOT NULL,
    CONSTRAINT fk_difficulty FOREIGN KEY (difficulty_id) REFERENCES difficulty(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- - [ ]  add the following data to them:
INSERT INTO 
    difficulty(id, difficulty)
VALUES
    (1, 'easy');

-- - [ ]  update the master joins task to have a medium difficulty level
-- - [ ]  delete the entry that has easy difficulty
-- - [ ]  design and implement a database [for this data](https://github.com/HackYourFuture-CPH/databases/blob/main/lesson2/articles_example.json) ([check out the process here](http://users.csc.calpoly.edu/~jdalbey/308/Lectures/HOWTO-ERD.html))