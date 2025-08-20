"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guerreiro_1 = require("./Guerreiro");
const heroi = new Guerreiro_1.Guerreiro(100);
const vilao = new Guerreiro_1.Guerreiro(80);
heroi.atacar(vilao); // Atacando outro personagem (usa método público que chama protected)
heroi.treinar(); // Acessando protected na própria instância
const Veiculo_1 = require("./Veiculo");
const Carro_1 = require("./Carro");
const ContaPoupanca_1 = require("./ContaPoupanca");
const myVeiculo = new Veiculo_1.Veiculo(100);
const myCarro = new Carro_1.Carro(0);
myCarro.acelerar(60);
const myBanco = new ContaPoupanca_1.ContaPoupanca(1000);
myBanco.aplicarJuros(100);
myBanco.aplicarJuros(100);
