CREATE DATABASE `concerts`
DEFAULT CHARACTER SET 'utf8mb4';

CREATE TABLE `concerts`.`concerts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `band` VARCHAR(255) NULL,
  `venue` VARCHAR(255) NULL,
  `created_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `performance_date` DATETIME NULL,
  `price` INT(45) NULL,
  PRIMARY KEY (`id`));

-- SELECT * FROM `concerts`.`concerts`;