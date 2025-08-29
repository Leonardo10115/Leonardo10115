CREATE TABLE IF NOT EXISTS categoria(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL UNIQUE
);
ALTER TABLE produtos ADD id_categoria INT;

ALTER TABLE produtos ADD CONSTRAINT fk_pedidos_categoria FOREIGN KEY (id_categoria) REFERENCES categoria(id);

INSERT INTO usuarios(nome, email)
VALUES('leonardo', 'leo@gmail')
('arthur', 'arthur@gmail')
('pedro', 'pedro@mail')

INSERT INTO produtos(nome, preco)
VALUES('chuteira', 300.00),
('monitor', 139.00);

INSERT INTO pedidos(id_usuarios, id_produtos, quantidade, data_pedido)
VALUES(5, 3, 2, '2025','11', '15');

ALTER TABLE pedidos
DROP FOREIGN KEY fk_pedidos_usuarios;
SHOW CREATE TABLE pedidos;



---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS usuarios(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
idade INT,
email VARCHAR(50),
senha VARCHAR(255)
);

INSERT INTO usuarios (id, nome, email, senha) VALUES

(3, 'Guilerme', 'Guilerme@gmail.com', 'senha321'),
(4, 'Arthur', 'Arthur@gmail.com', 'senha789');

ALTER TABLE usuarios DROP COLUMN idade


CREATE TABLE IF NOT EXISTS pedidos(
id_pedido INT AUTO_INCREMENT PRIMARY KEY,
id_cliente INT,
numero_pedido VARCHAR(50),
valor_total DECIMAL(10, 2),
data_pedido DATE,
FOREIGN KEY(id_clientes) REFERENCES clientes(id_clientes)

);



CREATE TABLE IF NOT EXISTS partida(
id_partida INT AUTO_INCREMENT PRIMARY KEY,
jogador VARCHAR(100) NOT NULL,
jogo VARCHAR(100),
pontuacao INT NOT NULL,
data_partida DATE NOT NULL,
);
------------- 
informações:

CREATE TABLE IF NOT EXISTS clientes(
 id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE clientes MODIFY data_cadastro  DATETIME DEFAULT CURRENT_TIMESTAMP;

CREATE TABLE IF NOT EXISTS livro(
id INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(150) NOT NULL,
autor VARCHAR(100) NOT NULL,
preco DECIMAL(8,2) NOT NULL,
estoque INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS pedidos(
id INT AUTO_INCREMENT PRIMARY KEY,
clientes_id INT,
data_pedidos DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fk_clientes_pedidos
FOREIGN KEY pedidos(clientes_id) REFERENCES 
clientes(id)
);

CREATE TABLE IF NOT EXISTS itens_pedido(
id INT AUTO_INCREMENT PRIMARY KEY,
pedido_id INT,
livro_id INT,
quantidade INT NOT NULL DEFAULT 1,
CONSTRAINT fk_pedidos_itens_pedido FOREIGN KEY itens_pedido(pedido_id) REFERENCES pedidos(id),
CONSTRAINT fk_livro_itens_pedido FOREIGN KEY itens_pedido(livro_id) REFERENCES livro(id)
);

INSERT INTO clientes(nome, email) VALUES
('Leonardo', 'leo@gmail'),
('Pedro', 'pedro@gmail'),
('Arthur', 'arthur@gmail');

INSERT INTO livro(titulo, autor, preco, estoque) VALUES
('Harry Poter', 'J.K Roling', 100.00,5),
('Game of thrones', 'Neymar', 98.99, 2),
('Pequeno principe', 'Messi', 150.00, 10);

INSERT INTO pedidos(clientes_id) VALUES
(1),
(2),
(3);

INSERT INTO itens_pedido(pedido_id, livro_id, quantidade) VALUES
(1, 1, 3),
(2, 3, 1),
(3, 2, 2);

-- 1
SELECT * FROM clientes;
-- 2
SELECT titulo, preco, estoque FROM livro;
-- 3
SELECT pedidos.id, pedidos.data_pedidos, clientes.nome FROM pedidos
INNER JOIN clientes ON pedidos.clientes_id = clientes.id
ORDER BY pedidos.id;
-- 4
SELECT pedidos.id, data_pedidos, itens_pedido.quantidade, livro.titulo FROM pedidos
INNER JOIN itens_pedido ON itens_pedido.pedido_id = pedidos.id
INNER JOIN livro ON itens_pedido.livro_id = livro.id
WHERE pedidos.id = 1;
-- 5
SELECT SUM(itens_pedido.quantidade) AS total_vendido, livro.titulo FROM itens_pedido
INNER JOIN livro ON itens_pedido.livro_id = livro.id
GROUP BY livro.titulo;
-- 6
SELECT * FROM pedidos
WHERE clientes_id = (
SELECT id FROM clientes WHERE nome = 'Leonardo'
);

-- 7 
SELECT SUM(livro.preco) AS valor_total, pedidos.id FROM itens_pedido
INNER JOIN pedidos ON itens_pedido.pedido_id = pedidos.id
INNER JOIN livro ON itens_pedido.livro_id = livro.id
GROUP BY pedidos.id;
































