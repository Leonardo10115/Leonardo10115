"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
    emitirSom() {
        console.log("Au au");
    }
}
exports.Cachorro = Cachorro;
