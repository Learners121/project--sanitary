DROP DATABASE IF EXISTS SANITARY;
CREATE DATABASE SANITARY;
USE SANITARY;

DROP TABLE IF EXISTS `Category`;
CREATE TABLE `Category` (
  `Category_id` varchar(36) NOT NULL DEFAULT (uuid()),
  `Name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Category_id`),
  UNIQUE KEY `Name` (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Product_details`;
CREATE TABLE `Product_details` (
  `Product_id` int NOT NULL AUTO_INCREMENT,
  `Product_uuid` varchar(255) NOT NULL DEFAULT (uuid()),
  `Category_id` int NOT NULL DEFAULT '0',
  `Class_id` int DEFAULT NULL,
  `Product_name` varchar(255) DEFAULT NULL,
  `Product_code` varchar(255) NOT NULL,
  `Product_size` varchar(255) DEFAULT NULL,
  `Product_qty` int DEFAULT NULL,
  `Product_rate` int DEFAULT NULL,
  `Product_company_name` varchar(255) DEFAULT NULL,
  `Deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`Product_id`),
  UNIQUE KEY `Product_name` (`Product_name`,`Product_company_name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `class_id` int NOT NULL AUTO_INCREMENT,
  `class_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`class_id`),
  UNIQUE KEY `class_type` (`class_type`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

