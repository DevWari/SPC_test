-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.24-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for db_video
CREATE DATABASE IF NOT EXISTS `db_video` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `db_video`;

-- Dumping structure for table db_video.tbl_metadata
CREATE TABLE IF NOT EXISTS `tbl_metadata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table db_video.tbl_metadata: ~4 rows (approximately)
/*!40000 ALTER TABLE `tbl_metadata` DISABLE KEYS */;
REPLACE INTO `tbl_metadata` (`id`, `size`, `count`, `createdAt`, `updatedAt`) VALUES
	(1, 50, 30, '2022-05-01 14:18:58', '2022-05-01 16:14:57'),
	(2, 20, 200, '2022-05-01 14:18:58', '2022-05-01 14:18:58'),
	(3, 10, 200, '2022-05-01 14:20:54', '2022-05-01 14:20:54'),
	(4, 10, 200, '2022-05-01 14:21:09', '2022-05-01 14:21:09');
/*!40000 ALTER TABLE `tbl_metadata` ENABLE KEYS */;

-- Dumping structure for table db_video.tbl_users
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `total_size` bigint(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table db_video.tbl_users: ~3 rows (approximately)
/*!40000 ALTER TABLE `tbl_users` DISABLE KEYS */;
REPLACE INTO `tbl_users` (`id`, `name`, `total_size`, `createdAt`, `updatedAt`) VALUES
	(1, 'Michael', 70, '2022-05-01 13:48:28', '2022-05-01 16:14:57'),
	(2, 'Jenyy', 10, '2022-05-01 13:48:58', '2022-05-01 13:48:58'),
	(3, 'Marry', 10, '2022-05-01 13:49:24', '2022-05-01 13:49:24');
/*!40000 ALTER TABLE `tbl_users` ENABLE KEYS */;

-- Dumping structure for table db_video.tbl_videos
CREATE TABLE IF NOT EXISTS `tbl_videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `video_id` bigint(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table db_video.tbl_videos: ~4 rows (approximately)
/*!40000 ALTER TABLE `tbl_videos` DISABLE KEYS */;
REPLACE INTO `tbl_videos` (`id`, `user_id`, `video_id`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 1, '2022-05-01 14:20:23', '2022-05-01 14:20:23'),
	(2, 1, 2, '2022-05-01 14:21:30', '2022-05-01 14:21:30'),
	(3, 2, 3, '2022-05-01 14:21:39', '2022-05-01 14:21:39'),
	(4, 3, 4, '2022-05-01 14:21:45', '2022-05-01 14:21:45');
/*!40000 ALTER TABLE `tbl_videos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
