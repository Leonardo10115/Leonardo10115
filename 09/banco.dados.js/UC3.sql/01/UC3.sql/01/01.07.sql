--Como criar uma tabela

CREATE TABLE IF NOT EXISTS usuarios(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
idade INT,
email VARCHAR(50),
senha VARCHAR(255)
);

--Como alterar uma tabela e adicionar uma nova coluna
ALTER TABLE usuarios ADD endereco VARCHAR(100);

--Como alterar uma tabela e mudar o tipo de uma coluna
ALTER TABLE usuarios MODIFY endereco TEXT;

--Como alterar uma tabela e mudar o nome de uma coluna
--(pode mudar o tipo também)
ALTER TABLE usuarios CHANGE COLUMN endereco logradouro VARCHAR(255);

--Como alterar uma tabela e excluir uma coluna
ALTER TABLE usuarios DROP COLUMN idade

--Como alterar uma tabela e renomeá-la
ALTER TABLE usuarios RENAME TO clientes;

--Como deletar uma tabela (CUIDADO!Exclui todos os dados!)
DROP TABLE clientes;

--Como inserir dados em uma tabela
INSERT INTO users (id, username, email, user_password) VALUES
(1, 'Leo', 'Leo@gmail.com', 'sennha123'),
(2, 'Pedro', 'Pedro@gmail.com', 'senha456');

--Como atualizar o valor de um dado
UPDATE users
SET email = 'Leo@gmail.com'
WHERE id = 1;

--Como deletar um dado
DELETE FROM users
WHERE id = 2;

--Cria uma nova tabela SE NÃO EXISTIR
CREATE TABLE IF NOT EXISTS users (
    --Auto_Increment Auto Incrementa o ID 
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(100),
--NOT NULL Impede que o valor do campo seja nulo
--Unique faz com que o valor do campo seja único (não pode dois iguais)
email VARCHAR(100) NOT NULL UNIQUE,
user_password VARCHAR(255) NOT NULL
);

UPDATE produtos SET estoque = 1
WHERE id_produtos = 2
SELECT * FROM users;
--RETORNA TODOS OS DADOS DA TABELA

SELECT * FROM guerreiros LIMIT 4--LIMITA OS RESULTADOS

ORDER BY --ORGANIZA A TABELA EX:
ASC--ORGANIZA DO MENOR PRO MAIOR
DESC--ORGANIZA DO MAIOR PRO MENOR

--CONSULTA COM CONDIÇÃO + DADOS ORDENADOS
SELECT * FROM guerreiros WHERE poder_luta > 9000 ORDER BY  nome ASC;

--CONSULTA COM LIMITE DE RESULTADOS
SELECT * FROM guerreiros WHERE poder_luta > 9000 ORDER BY  nome ASC;

--CONSULTA DE VALORES DISTINTOS
SELECT * FROM guerreiros WHERE poder_luta > 9000 ORDER BY  nome ASC;

--CRIA UMA CHAVE ESTRANGEIRA
FOREIGN KEY(id_produtos) REFERENCES produtos(id)


ALTER TABLE produtos ADD CONSTRAINT fk_pedidos_usuarios FOREIGN KEY (id_usarios) REFERENCES usuarios(id);


--Deletar chave estrangeira
ALTER TABLE Pedidos;
DROP FOREIGN KEY fk_pedidos_usuarios;

--Soma todas os valores que estao em uma coluna
SELECT SUN(preco) AS valor_total--nome adicionada pelo comando AS
FROM produtos;

SELECT AVG (valor_total) FROM produtos;
--Faz a media de todos os valores em uma coluna 

SELECT MAX(valor_total) AS produto_valor_mais_alto FROM produtos;--Mostra o valor mais alto na coluna 

SELECT MIN()--Retorna o menor valor de uma coluna


--Junta informações da tabela escolhida
SELECT usuarios.id, usuarios.nome, pedidos.id, pedidos.id_produtos
FROM usuarios
INNER JOIN pedidos ON usuarios.id = pedidos.id_usuarios;
INNER JOIN



SELECT usuarios.id, usuarios.nome, pedidos.id, pedidos.id_produtos
FROM usuarios
INNER JOIN pedidos ON usuarios.id = pedidos.id_usuarios;
INNER JOIN produtos ON pedidos.id_produtos = produtos.id;



SELECT usuarios.id, usuarios.nome, pedidos.id, pedidos.id_produtos
FROM usuarios
LEFT JOIN pedidos ON usuarios.id = pedidos.id_usuarios;
LEFT JOIN produtos ON pedidos.id_produtos = produtos.id;



SELECT usuarios.id, usuarios.nome, pedidos.id, pedidos.id_produtos
FROM usuarios
I JOIN pedidos ON usuarios.id = pedidos.id_usuarios;
LEFT JOIN produtos ON pedidos.id_produtos = produtos.id;
