"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = require("./Veiculo");
class Carro extends Veiculo_1.Veiculo {
    constructor(velocidade) {
        super(velocidade);
    }
    //Método
    acelerar(novaVelocidade) {
        this.velocidade = novaVelocidade;
        console.log(`Nova velocidade: ${this.velocidade}`);
    }
}
exports.Carro = Carro;
//Outra forma de fazer.
// acelerar(){
// this.velocidade *= 1.1
//console.log(`O carro esta andando a ${this.velocidade.toFixed(2)} km/h`)
//}
