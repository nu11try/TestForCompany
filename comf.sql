-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 17 2018 г., 02:59
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `comf`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `surname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `trname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Первый',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=21 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `surname`, `name`, `trname`, `status`) VALUES
(1, 'Криволесов', 'Михаил', 'Викторович', 'Второй'),
(15, 'Иванов', 'Иван', 'Иванович', 'Второй'),
(13, 'Завьялов', 'Александр', 'Семенович', 'Второй'),
(14, 'Кировский', 'Евгений', 'Юрьевич', 'Первый'),
(16, 'Иванов', 'Михаил', 'Игоревич', 'Первый'),
(17, 'Грановский', 'Иван', 'Иванович', 'Первый'),
(18, 'Петров', 'Иван', 'Игоревич', 'Первый'),
(19, 'Петров', 'Максим', 'Игоревич', 'Первый'),
(20, 'Криволесов', 'Михаил', 'Петрович', 'Первый');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
