"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor(velocidade) {
        this.velocidade = velocidade;
    }
    //Método protect nao pode ser chamado no index, so pode ser chamado por outro metedo
    Velocidade(velocidade) {
        this.velocidade = velocidade;
        console.log(`velocidade: ${this.velocidade}`);
    }
}
exports.Veiculo = Veiculo;
