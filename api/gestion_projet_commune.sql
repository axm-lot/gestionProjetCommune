-- MariaDB dump 10.19  Distrib 10.11.3-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: gestion_projet_commune
-- ------------------------------------------------------
-- Server version	10.11.3-MariaDB-1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Communication`
--

DROP TABLE IF EXISTS `Communication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Communication` (
  `ID_Communication` varchar(10) NOT NULL,
  `ID_Projet` varchar(10) DEFAULT NULL,
  `Message` text DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID_Communication`),
  KEY `ID_Projet` (`ID_Projet`),
  CONSTRAINT `Communication_ibfk_1` FOREIGN KEY (`ID_Projet`) REFERENCES `Projets` (`ID_Projet`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Communication`
--

LOCK TABLES `Communication` WRITE;
/*!40000 ALTER TABLE `Communication` DISABLE KEYS */;
INSERT INTO `Communication` VALUES
('COMM1','PROJ1','Travaux d\'Urgence:Rehabilitation d\'infrastructure d\'eau potable:EntrepriseAZ:1mois','2023-07-03','Affiche:FB');
/*!40000 ALTER TABLE `Communication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Parties_prenantes`
--

DROP TABLE IF EXISTS `Parties_prenantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Parties_prenantes` (
  `ID_PartiePrenante` varchar(10) NOT NULL,
  `Nom_PartiePrenante` varchar(255) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Contact` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID_PartiePrenante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Parties_prenantes`
--

LOCK TABLES `Parties_prenantes` WRITE;
/*!40000 ALTER TABLE `Parties_prenantes` DISABLE KEYS */;
/*!40000 ALTER TABLE `Parties_prenantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Projets`
--

DROP TABLE IF EXISTS `Projets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Projets` (
  `ID_Projet` varchar(10) NOT NULL,
  `Nom_Projet` varchar(255) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Date_Debut` date DEFAULT NULL,
  `Date_Fin` date DEFAULT NULL,
  `Statut` varchar(20) DEFAULT NULL,
  `Responsable` varchar(255) DEFAULT NULL,
  `Budget` decimal(30,2) DEFAULT NULL,
  PRIMARY KEY (`ID_Projet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Projets`
--

LOCK TABLES `Projets` WRITE;
/*!40000 ALTER TABLE `Projets` DISABLE KEYS */;
INSERT INTO `Projets` VALUES
('PROJ1','CONSTRUCTION DE ROUTE','BOULEVARD:25KM:Ambalax:Ambalay','2023-07-05','2023-12-24','En cours','Mairie',2000000.00),
('PROJ2','CONSTRUCTION DE PONT','BETON:15M:Ambalay:30PERS','2023-07-04','2023-12-23','Annule','Mairie',5000000.00);
/*!40000 ALTER TABLE `Projets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ressources`
--

DROP TABLE IF EXISTS `Ressources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ressources` (
  `ID_Ressource` varchar(10) NOT NULL,
  `Nom_Ressource` varchar(255) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Disponibilité` tinyint(1) DEFAULT NULL,
  `Quantité` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_Ressource`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ressources`
--

LOCK TABLES `Ressources` WRITE;
/*!40000 ALTER TABLE `Ressources` DISABLE KEYS */;
/*!40000 ALTER TABLE `Ressources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Taches`
--

DROP TABLE IF EXISTS `Taches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Taches` (
  `ID_Tâche` varchar(10) NOT NULL,
  `ID_Projet` varchar(10) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Date_Debut` date DEFAULT NULL,
  `Date_Fin` date DEFAULT NULL,
  `Statut` varchar(20) DEFAULT NULL,
  `Responsable` varchar(255) DEFAULT NULL,
  `Priorité` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID_Tâche`),
  KEY `ID_Projet` (`ID_Projet`),
  CONSTRAINT `Taches_ibfk_1` FOREIGN KEY (`ID_Projet`) REFERENCES `Projets` (`ID_Projet`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Taches`
--

LOCK TABLES `Taches` WRITE;
/*!40000 ALTER TABLE `Taches` DISABLE KEYS */;
INSERT INTO `Taches` VALUES
('TASK1','PROJ1','Travaux d\'Urgence:Rehabilitation d\'infrastructure d\'eau potable:1000 personne','2023-07-04','2023-08-08','En cours','Technicien','Urgent');
/*!40000 ALTER TABLE `Taches` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-09 15:32:09
