"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Biscicleta_1 = require("./Biscicleta");
const Boleto_1 = require("./Boleto");
const Cachorro_1 = require("./Cachorro");
const Carro_1 = require("./Carro");
const CartaoCredito_1 = require("./CartaoCredito");
const Gato_1 = require("./Gato");
const Pagamento_1 = require("./Pagamento");
const Veiculo_1 = require("./Veiculo");
const meuAnimal = new Cachorro_1.Cachorro();
const outroAnimal = new Gato_1.Gato();
meuAnimal.falar();
outroAnimal.falar();
const transporte = [new Carro_1.Carro(), new Biscicleta_1.Biscicleta(), new Veiculo_1.Veiculo()];
transporte.forEach(andar => {
    andar.mover();
});
const conta = [new Boleto_1.Boleto(), new CartaoCredito_1.CartaoCredito(), new Pagamento_1.Pagamento()];
conta.forEach(pago => {
    pago.processar();
});
