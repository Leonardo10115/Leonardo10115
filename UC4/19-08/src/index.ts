import { Guerreiro } from "./Guerreiro";


const heroi = new Guerreiro(100)
const vilao = new Guerreiro(80)

heroi.atacar(vilao);  // Atacando outro personagem (usa método público que chama protected)
heroi.treinar();  // Acessando protected na própria instância

import { Veiculo } from "./Veiculo"
import { Carro } from "./Carro"
import { ContaPoupanca } from "./ContaPoupanca";

const myVeiculo = new Veiculo(100)
const myCarro = new Carro(0)
myCarro.acelerar(60)

const myBanco:ContaPoupanca = new ContaPoupanca(1000)
myBanco.aplicarJuros(100)
myBanco.aplicarJuros(100)
