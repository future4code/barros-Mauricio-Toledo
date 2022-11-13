
 --Ex1


a)


ALTER TABLE ACTOR DROP COLUMN salary;


 Remove a coluna salary em ACTOR

b)


ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

 Muda O 'gender' para 'sex'.

c) 


ALTER TABLE Actor CHANGE gender gender VARCHAR(255);


 Muda  o formato dos dados  coluna gender, mas mantém o  nome.

d) 


ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

--ex2

a) 

```
UPDATE Actor
SET
name = "Tarcísio Meira", 
birth_date = "1935-10-5"
WHERE id = "001";


b) 


UPDATE Actor
SET
name = "JULIANA PAES"
WHERE id = "004";
UPDATE Actor
SET
name = "Juliana Paes"
WHERE id = "004";


c) 


UPDATE Actor
SET
name = "Roy grayson",
salary = 120000,
birth_date = "1969-02-21",
gender = "female"
WHERE id = "005";


d) 

 Não exibe mensagem de erro,  diz que não houve mudanças: Matched: 0 , Changed: 0.

--ex3

a) 

DELETE FROM Actor WHERE name = "Fernanda Montenegro"


b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00*


DELETE FROM Actor WHERE gender = "male" and  salary > 1000000;



--ex4

a) 


SELECT MAX(salary) FROM Actor;


b)


SELECT MIN(salary) FROM Actor WHERE gender = "female";


c) 

SELECT COUNT(*) FROM Actor WHERE gender = "female";
 

d) 


SELECT SUM(salary) FROM Actor;


--ex5


SELECT COUNT(*), gender
FROM Actor
GROUP BY gender


a) 
  contagem e agrupa por genêro. ex.: 6 female, 4 male.

b) 


SELECT id, name FROM Actor ORDER BY name DESC;


c) 
SELECT * FROM Actor ORDER BY salary ASC;


d) 


SELECT * FROM Actor
WHERE gender = "female"
ORDER BY salary DESC 
LIMIT 3;


e) 


SELECT AVG(salary) FROM Actor GROUP BY gender;


--ex6

a) 

```
ALTER TABLE Movie ADD playing_limit_date DATE;
UPDATE Movie SET playing_limit_date = DATE_ADD(release_date, INTERVAL 90 DAY);
ALTER TABLE Movie MODIFY playing_limit_date DATE NOT NULL;



