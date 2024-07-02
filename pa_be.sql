CREATE DATABASE  IF NOT EXISTS `pa_be` /*!40100 */;
USE `pa_be`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: pa_be
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `class_results`
--

DROP TABLE IF EXISTS `class_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` varchar(225) DEFAULT NULL,
  `patientId` varchar(225) DEFAULT NULL,
  `ctscan` varchar(225) DEFAULT NULL,
  `classification` varchar(225) DEFAULT NULL,
  `label` varchar(225) DEFAULT NULL,
  `doctorId` varchar(225) DEFAULT NULL,
  `probability` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_results`
--

LOCK TABLES `class_results` WRITE;
/*!40000 ALTER TABLE `class_results` DISABLE KEYS */;
INSERT INTO `class_results` VALUES (1,'2024-04-15','1','http://localhost:4000/assets/1712122420181-normal.png','Subdural','Subdural','3','90'),(2,'2024-04-15','1','http://localhost:4000/assets/1712122420181-normal.png','Subdural','Subdural','3','80'),(19,'2024-04-16','1','http://localhost:4000/assets/1713270868108-epidural.png','Epidural','Epidural','4','94.5'),(21,'2024-04-16','1','http://localhost:4000/assets/1713271713658-epidural.png','Epidural','Epidural','4','94.5'),(28,'2024-04-18','2','http://localhost:4000/assets/1713416679714-epidural.png','Epidural','Epidural','6','94.5'),(29,'2024-04-18','3','http://localhost:4000/assets/1713416759041-normal.png','Normal','Normal','6','92.4'),(30,'2024-04-23','1','http://localhost:4000/assets/1713851695887-normal.png','Normal','Normal','6','92.4'),(32,'2024-06-10','4','http://localhost:4000/assets/1718009906252-normal.png','Normal','Normal','11','92.4'),(33,'2024-06-11','4','http://localhost:4000/assets/1718096766621-normal.png','Normal','Normal','13','92.4'),(34,'2024-5-12','4','http://localhost:4000/assets/1718127170577-epidural.png','Epidural','Epidural','13','94.5'),(37,'2024-5-12','1','http://localhost:4000/assets/1718163658767-epidural.png','Epidural','Epidural','13','94.5'),(38,'2024-5-12','14','http://localhost:4000/assets/1718179561665-epidural.png','Epidural','Epidural','13','94.5'),(39,'2024-5-12','14','http://localhost:4000/assets/1718179981494-epidural.png','Epidural','Epidural','13','94.5');
/*!40000 ALTER TABLE `class_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `patientId` int NOT NULL AUTO_INCREMENT,
  `patientName` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`patientId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1,'Muhammad Nur Faiz'),(4,'Mas Faiz Gans'),(13,'Nur Faiz'),(14,'tes');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_account`
--

DROP TABLE IF EXISTS `user_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(225) DEFAULT NULL,
  `password` varchar(225) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_account`
--

LOCK TABLES `user_account` WRITE;
/*!40000 ALTER TABLE `user_account` DISABLE KEYS */;
INSERT INTO `user_account` VALUES (1,'admin','$2b$10$LjT0EW4Sucf7XbuH1Z.CvOx6dmnztoWgCwyjHK2GtHmnmWPLV8Mu6','admin@ichwunden.com'),(3,'b','$2b$10$4MbjNre1yTXtzvAQcvkS.u9sowmi5VCCwcaSLVqaam9CtdZhxS4aG','a'),(10,'nurfaiz26','$2b$10$vMBaTHp8lo.d8qQF0jrhZexpV5k4TvsvJ8W3dqvPwW0CmzvmLue7u','faiz@faiz.com'),(11,'nurfaiz','$2b$10$nfCycKEFLkl4XYgG8tZHl.3QYFJvadZr3qY8v.p6SGraS9l8tm/7O','faiz@faiz.com'),(13,'faiz','$2b$10$yEcjda5RmSWws6LIu8GJ1u4PkqzAsoJHDV1Y8PhaE46MqzVWbuXsO','faiz@faiz.com'),(18,'tes','$2b$10$l5SSkItPrrimcKEDU.W5IuqfU95XGGtJLykZ04RwUetySYtqNh.Zq','tes@tes.com');
/*!40000 ALTER TABLE `user_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(225) DEFAULT NULL,
  `role` varchar(225) DEFAULT NULL,
  `username` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'faiz','Developer',NULL),(3,'nur','Developer',NULL),(4,'Faiz','Doctor','a'),(5,'Admin','Admin','admin'),(10,'Faiz','Doctor','nurfaiz26'),(11,'Faiz','Expert','nurfaiz'),(13,'Nur Faiz','Doctor','faiz'),(18,'test','Doctor','tes');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13  9:55:50
