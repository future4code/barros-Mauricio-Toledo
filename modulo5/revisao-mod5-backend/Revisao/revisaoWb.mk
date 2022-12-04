CREATE TABLE movie (
id INT PRIMARY KEY  AUTO_INCREMENT,
title VARCHAR(255) NOT NULL ,
year INT NOT NULL

);

INSERT INTO movie (title , year)
VALUES 
   ("Deadpool", 2016),
   (" X-man: O filme", 2000);
   
   SELECT * FROM movie;
   
   CREATE TABLE characters (
id INT PRIMARY KEY  AUTO_INCREMENT,
name VARCHAR(255) NOT NULL ,
gender ENUM("MALE" , "FEMALE", "OTHER"),
description VARCHAR(255) DEFAULT "No descripcion required"

);

INSERT INTO characters (name , gender)
VALUES 
("STORM", "FEMALE"),
("COLOSSUS", "MALE");

INSERT INTO characters (name , gender, description)
VALUES 
("DEADPOOL", "OTHER", "SEXY MOFO");


SELECT * FROM characters;






CREATE TABLE movie_characters (
movie_id INT,
characters_id INT,
FOREIGN KEY (movie_id) REFERENCES movie(id),
FOREIGN KEY (characters_id) REFERENCES characters(id)
);
INSERT INTO movie_characters 
VALUES
    (1,2),
    (1,4),
    (2,1),
    (2,2);
    
SELECT name, title FROM movie_characters
JOIN movie ON movie_id = movie.id
JOIN characters ON characters_id = characters.id
WHERE movie_id = 2;