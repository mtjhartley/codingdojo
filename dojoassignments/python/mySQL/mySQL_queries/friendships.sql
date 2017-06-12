/*Assignment Query is last 4 lines*/

CREATE DATABASE  IF NOT EXISTS `friends` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `friends`;

DROP TABLE IF EXISTS `friendships`;

CREATE TABLE `friendships` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_friendships_users_idx` (`user_id`),
  KEY `fk_friendships_users1_idx` (`friend_id`),
  CONSTRAINT `fk_friendships_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_friendships_users1` FOREIGN KEY (`friend_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;


LOCK TABLES `friendships` WRITE;
/*!40000 ALTER TABLE `friendships` DISABLE KEYS */;
INSERT INTO `friendships` VALUES (1,'2017-06-12 14:43:41','2017-06-12 14:43:41',2,5),(2,'2017-06-12 14:43:43','2017-06-12 14:43:43',2,4),(3,'2017-06-12 14:43:46','2017-06-12 14:43:46',2,3),(4,'2017-06-12 14:44:30','2017-06-12 14:44:30',3,2),(6,'2017-06-12 14:44:35','2017-06-12 14:44:35',4,2),(7,'2017-06-12 14:44:36','2017-06-12 14:44:36',5,2);
/*!40000 ALTER TABLE `friendships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Chris','Baker','2017-06-12 14:41:06','2017-06-12 14:41:06'),(3,'Diana','Smith','2017-06-12 14:41:14','2017-06-12 14:41:14'),(4,'James','Johnson','2017-06-12 14:41:21','2017-06-12 14:41:21'),(5,'Jessica','Davidson','2017-06-12 14:41:32','2017-06-12 14:41:32');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


SELECT users.first_name as first_name, users.last_name as last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name 
FROM users
left join friendships ON users.id = friendships.user_id
left join users as user2 on friendships.friend_id = user2.id
ORDER BY friend_last_name DESC