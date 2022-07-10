CREATE DATABASE IF NOT EXISTS POST_DATABASE_TBTB;
use POST_DATABASE_TBTB;

CREATE TABLE IF NOT EXISTS posts(
id int(255) AUTO_INCREMENT NOT NULL,
title varchar(255),
description_post varchar(255),
createdAt datetime,
updatedAt datetime,
CONSTRAINT pk_posts PRIMARY KEY(id),
UNIQUE INDEX `title_UNIQUE` (`title` ASC) VISIBLE
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS comments(
id int(255) AUTO_INCREMENT NOT NULL,
post_id INT(255), 
description_commets varchar(255),
createdAt datetime,
updatedAt datetime,
CONSTRAINT pk_commets PRIMARY KEY(id),
CONSTRAINT fk_posts_commets FOREIGN KEY(post_id) REFERENCES posts(id)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS tags(
id int(255) AUTO_INCREMENT NOT NULL,
name_tag varchar(255),
createdAt datetime,
updatedAt datetime,
CONSTRAINT pk_tags PRIMARY KEY(id),
UNIQUE INDEX `name_tag _UNIQUE` (`name_tag` ASC) VISIBLE
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS  posts_tags(
id int(255) AUTO_INCREMENT NOT NULL,
post_id INT(255),
tag_id INT(255),
createdAt datetime,
updatedAt datetime,
CONSTRAINT pk_posts_tags PRIMARY KEY(id),
CONSTRAINT fk_posts_tags FOREIGN KEY(tag_id) REFERENCES tags(id),
CONSTRAINT fk_posts_posts FOREIGN KEY(post_id) REFERENCES posts(id)
)ENGINE=InnoDB;

