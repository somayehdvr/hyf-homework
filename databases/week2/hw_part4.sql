-- Part 4: Creating a database
-- Using an entity relationship diagram, design the data model for an application of your choice. This can be anything, previous students have used a small business (with staff, offices, and job titles), a library (with books, genres, racks, members, and a borrowing log), or a farm (with animals, barns, and farmers).
-- Your application must include at least one many-to-many relationship and any supporting tables (linking tables) that are needed. The entity relationship diagram must describe what tables you will need, the columns in these tables, which column is the primary key, and the relationships between tables.
-- Next, using the entity relationship diagram as a starting point, write all the necessary CREATE TABLE statements to create all tables and relationships (foreign key constraints) for this data model.
-- Submit an image or PDF of your entity relationship diagram, and a .sql file with the CREATE TABLE statements.
CREATE DATABASE McDonalds
DEFAULT CHARACTER SET 'utf8mb4'; 
USE McDonalds;
CREATE TABLE `customer`(
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    `phone` VARCHAR(255),
    PRIMARY KEY (`id`)
);
CREATE TABLE `status`(
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    name ENUM('created', 'ongoing', 'finished', 'delivered') DEFAULT 'created',
    PRIMARY KEY (`id`)
);
CREATE TABLE `product`(
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10, 2),
    PRIMARY KEY (`id`)
);
CREATE TABLE `order`(
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `customer_id` INT(10) UNSIGNED NOT NULL,
    `status_id` INT(10) UNSIGNED NOT NULL,
    `created` DATETIME NOT NULL,
    `done` DATETIME,
    `delivered` DATETIME,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE 
);
CREATE TABLE `order_datails`(
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `order_id` INT(10) UNSIGNED NOT NULL,
    `product_id` INT(10) UNSIGNED NOT NULL,
    `quantity` INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);