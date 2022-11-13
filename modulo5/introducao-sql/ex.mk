CREATE TABLE ACTOR (
  id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
SHOW  TABLES;
DESCRIBE ACTOR; 
-- ex1
-- a 
/* Varchar = Representa quantidade de caracteres , FLOAT numeros quebrados, 
DATE data de nascimento padrão MM-DD-YYYY*/
-- b SHOW Filtra as tables
-- c Detalha uma table 


-- ex 2
INSERT INTO ACTOR (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO ACTOR (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1.200000,
  "1963-08-23", 
  "female"
);
INSERT INTO ACTOR (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1.200000,
  "1963-08-23", 
  "female"
);
-- b o erro de duplicata da query

INSERT INTO ACTOR (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- c Os valores dos paremetos não são iguais que nem o da principal
INSERT INTO ACTOR (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- d falta o parametro do nome, um espaço faltando
INSERT INTO ACTOR (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- e o padrao de data esta errado o correto é mm-dd-yyyy
-- ex3
INSERT INTO ACTOR (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Wagner Moura",
  4000000,
  "1967-08-25", 
  "male"
);
-- a 
SELECT * from ACTOR WHERE gender = "female";
-- b
SELECT * from ACTOR WHERE name = "Tony Ramos";

-- c 
SELECT * from ACTOR WHERE gender = "neutro";
-- ex 4
-- a Os operadores fazem comparação como javscript com excesao do LIKE que compara strings;
-- b 
SELECT * FROM ACTOR
WHERE (name LIKE "A" ) AND salary > 350;
-- c
SELECT * FROM ACTOR
WHERE (name LIKE "G%" or "g%" );
-- d 
SELECT * FROM Actor
WHERE 
	(name LIKE "g%" or  "G%" or "a%" or "A%");
    
-- ex 5
CREATE TABLE MOVIE (
  id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    sinopese longtext,
    lauch_date DATE NOT NULL,
    rate FLOAT NOT NULL
);
-- a 
INSERT INTO MOVIE (id,title,sinopese,lauch_date,rate)
VALUES(
  "001", 
  "Se Eu Fosse Você",
" Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
"7"
);
INSERT INTO MOVIE (id,title,sinopese , lauch_date,  rate)
VALUES(
  "002", 
  "Doce de mãe",
" Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
10
);

    INSERT INTO MOVIE (id,title,sinopese , lauch_date,  rate)
VALUES(
   "003",
"Dona Flor e Seus Dois Maridos",
 "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
 "2017/11/02",
"8"
);
-- e
SELECT * FROM MOVIE;
-- 6
 -- a 
 SELECT * FROM MOVIE
WHERE (name LIKE "A" ) AND salary > 350;
    