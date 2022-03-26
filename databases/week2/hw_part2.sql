-- Part 2: School database
-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE DATABASE School
DEFAULT CHARACTER SET 'utf8mb4';

CREATE TABLE `class`(
    `id` INT(10) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `begins` DATE,
    `ends` DATE
);

CREATE TABLE `student`(
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255),
    `phone` VARCHAR(255),
    `class_id` INT(10) UNSIGNED,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
CREATE INDEX `name_index`
ON `student`(`name`);

-- Add a new column to the class table named status which can only have the 
-- following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE `class`
ADD `status` ENUM('not-started', 'ongoing', 'finished');
