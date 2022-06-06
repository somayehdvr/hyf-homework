--Data model
----------------------------------------------------------------
CREATE DATABASE mealSharing
DEFAULT CHARACTER SET 'utf8mb4';

USE mealSharing;

CREATE Table `Meal`(
 `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
 `title` varchar(255),
 `description` text NULL DEFAULT NULL,
 `location` varchar(255),
 `when` datetime,
 `max_reservations` int(10),
 `price` decimal(10, 2),
 `created_date` date,
 PRIMARY KEY (`id`)
);

CREATE Table `Reservation`(
 `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
 `number_of_guests` int(10) UNSIGNED,
 `meal_id` int(10) UNSIGNED NOT NULL,
 `created_date` date,
 `contact_phonenumber` varchar(255),
 `contact_name` varchar(255),
 `contact_email` varchar(255),
 PRIMARY KEY (`id`),
 CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE Table `Review`(
 `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
 `title` varchar(255),
 `description` text NULL DEFAULT NULL,
 `meal_id` int(10) UNSIGNED,
 `stars` int(10),
 `created_date` date,
 PRIMARY KEY (`id`),
 CONSTRAINT `fk_mealId` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

--Queries
----------------------------------------------------------------
----------Meal
----------------------
-- Get all meals
SELECT 
    *
FROM
    `Meal`;

-- Add a new meal
INSERT INTO 
    `Meal`(`id`,`title`,`max_reservations`,`price`)
VALUES
    (1,'Pizza',8,100);

-- Get a meal with any id, fx 1
SELECT
    *
FROM
    `Meal`
WHERE
    id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
    `Meal`
SET 
    title = 'Steak'
WHERE
    id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM
    `Meal`
WHERE
    id = 1;

----------Reservation
----------------------
-- Get all reservations
SELECT
    *
FROM
    `Reservation`;

-- Add a new reservation
INSERT INTO
    `Reservation` (`id`,`number_of_guests`,`meal_id`,`contact_name`,`contact_email`)
VALUES
    (1, 3, 1, 'Somayeh', 'Somayehdvr@gmail.com');

-- Get a reservation with any id, fx 1
SELECT
    *
FROM
    `Reservation`
WHERE
    id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
    `Reservation`
SET 
    `contact_phonenumber` = '91638471',
    `contact_name` = 'Ali'
WHERE
    id = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM
    `Reservation`
WHERE
    id = 1;

----------Review
----------------------
-- Get all reviews
SELECT
    *
FROM
    `Review`;

-- Add a new review
INSERT INTO
    `Review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES
    (1, 'Not Bad', 'the meal pizza was not so bad', 1, 3, '2022.03.01');

-- Get a review with any id, fx 1
SELECT
    *
FROM
    `Review`
WHERE
    id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
    `Review`
SET
    created_date = '2022.03.23'
WHERE
    id = 1;

-- Delete a review with any id, fx 1
DELETE FROM
    `Review`
WHERE
    id = 2;

-- Additional queries
----------------------------------------------------------------
-- Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries
INSERT INTO 
    `Meal`(`id`,`title`,`max_reservations`,`price`, `created_date`)
VALUES
    (2,'Soup',3,40,'2022.03.01');

INSERT INTO
    `Review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES
    (2, 'Good', 'the meal soup was good', 2, 5, '2022.03.24');
----------Functionality
----------------------
-- Get meals that has a price smaller than a specific price fx 90
SELECT
    * 
FROM
    `Meal`
WHERE
    price < 90;

-- Get meals that still has available reservations
SELECT
    sums.reserved, Meal.*
FROM
    Meal
    JOIN (SELECT SUM(number_of_guests) as reserved, meal_id
          FROM `Reservation`
          GROUP BY meal_id) as sums ON Meal.id = sums.meal_id
WHERE
    Meal.max_reservations < sums.reserved;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT 
    *
FROM
    `Meal`
WHERE
    Meal.title LIKE '%iz%';

-- Get meals that has been created between two dates
SELECT 
    *
FROM
    `Meal`
WHERE
    '2021.03.01' < meal.created_date AND meal.created_date < '2022.03.25';

-- Get only specific number of meals fx return only 5 meals
SELECT 
    *
FROM
    `Meal`
LIMIT
    5;
-- Get the meals that have good reviews
SELECT 
    *
FROM
    `Meal`
    LEFT JOIN `Review` ON review.meal_id = meal.id
WHERE
    review.stars > 3;

-- Get reservations for a specific meal sorted by created_date
SELECT
    *
FROM
    `Reservation`
WHERE
    meal_id = 1
ORDER BY
    created_date;

-- Sort all meals by average number of stars in the reviews
SELECT
    meal_id, meal.title, AVG(review.stars) as avg_stars
FROM
    `Review`
    LEFT JOIN `Meal` ON review.meal_id = meal.id
GROUP BY
    meal_id
